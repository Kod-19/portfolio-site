import React, { useEffect, useState } from "react";
import { portfolioService } from "../services/portfolioService";

export default function PaystackCheckout({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [amountGhs, setAmountGhs] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [paystackReady, setPaystackReady] = useState(false);
  const isModalView = typeof isOpen === "boolean";

  const resetState = () => {
    setEmail("");
    setAmountGhs("");
    setProcessing(false);
    setSuccess(false);
    setError("");
  };

  useEffect(() => {
    if (isModalView && !isOpen) {
      resetState();
      return;
    }

    if (window.PaystackPop) {
      setPaystackReady(true);
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://js.paystack.co/v1/inline.js"]',
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => setPaystackReady(true), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setPaystackReady(true);
    script.onerror = () =>
      setError(
        "Paystack failed to load. Please refresh the page and try again.",
      );
    document.body.appendChild(script);
  }, [isModalView, isOpen]);

  if (isModalView && !isOpen) return null;

  const handlePayment = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !amountGhs || Number(amountGhs) <= 0) {
      setError("Please enter a valid email and amount.");
      return;
    }

    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "";
    if (!publicKey || publicKey.includes("your_")) {
      setError(
        "Paystack is not configured yet. Add your public key to the environment file.",
      );
      return;
    }

    if (!window.PaystackPop) {
      setError(
        "Paystack is still loading. Please wait a moment and try again.",
      );
      return;
    }

    setProcessing(true);

    try {
      const paystack = window.PaystackPop.setup({
        key: publicKey,
        email,
        amount: Math.round(Number(amountGhs) * 100),
        currency: "GHS",
        channels: ["card", "bank", "ussd", "qr", "mobile_money"],
        onSuccess: async (transaction) => {
          try {
            await portfolioService.recordPayment({
              reference: transaction.reference,
              email,
              amountGhs: Number(amountGhs),
              amountPesewas: Math.round(Number(amountGhs) * 100),
              channel: "paystack_inline",
              status: "success",
              currency: "GHS",
            });

            setSuccess(true);
            setProcessing(false);
          } catch (err) {
            console.error("Failed to log payment to Firestore:", err);
            setError(
              "Payment succeeded, but we could not save the transaction automatically.",
            );
            setProcessing(false);
          }
        },
        onCancel: () => {
          setProcessing(false);
          setError("Transaction cancelled.");
        },
      });

      paystack.openIframe();
    } catch (err) {
      console.error("Paystack initialization failed:", err);
      setProcessing(false);
      setError("Unable to start the payment gateway. Please try again.");
    }
  };

  return (
    <div
      className={
        isModalView
          ? "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          : "flex min-h-[70vh] items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(102,227,255,0.12),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(255,209,102,0.08),transparent_28%),var(--dark-bg)] px-4 py-12"
      }
    >
      <div className="relative w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        {isModalView && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-sm font-bold text-slate-400 hover:text-white"
          >
            ✕
          </button>
        )}

        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-bold text-white">Payment Received!</h3>
            <p className="text-slate-400 text-xs">
              Thank you for your payment of{" "}
              <span className="text-white font-semibold">GHS {amountGhs}</span>.
              A receipt has been generated.
            </p>
            <button
              onClick={() => {
                resetState();
                onClose();
              }}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white">Make a Payment</h3>
              <p className="text-slate-400 text-xs">
                Pay retainers or invoices directly via Paystack.
              </p>
            </div>

            {error && (
              <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-300">
                {error}
              </div>
            )}

            {!paystackReady && !error && (
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
                Preparing Paystack checkout...
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="client@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">
                Amount (GHS)
              </label>
              <input
                type="number"
                required
                min="1"
                placeholder="500"
                value={amountGhs}
                onChange={(e) => setAmountGhs(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={processing || !paystackReady}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-lg text-xs transition disabled:opacity-50"
            >
              {processing
                ? "Processing Paystack..."
                : `Pay GHS ${amountGhs || "0"}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
