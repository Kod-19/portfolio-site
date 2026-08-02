import React, { useState } from 'react';
import { portfolioService } from '../services/portfolioService';

export default function PaystackCheckout({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [amountGhs, setAmountGhs] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    if (!email || !amountGhs || Number(amountGhs) <= 0) {
      alert('Please enter a valid email and amount.');
      return;
    }

    setProcessing(true);

    // Initialize Paystack Inline Pop-up
    const paystack = new window.PaystackPop();
    paystack.newTransaction({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || 'pk_test_xxx', // Add your key to .env
      email: email,
      amount: Math.round(Number(amountGhs) * 100), // Paystack accepts amount in Pesewas
      currency: 'GHS',
      onSuccess: async (transaction) => {
        try {
          // Sync transaction result to Firestore database
          await portfolioService.recordPayment({
            reference: transaction.reference,
            email: email,
            amountGhs: Number(amountGhs),
            channel: 'paystack_inline',
            status: 'success',
          });

          setSuccess(true);
          setProcessing(false);
        } catch (err) {
          console.error('Failed to log payment to Firestore:', err);
          alert('Payment succeeded, but failed to log transaction automatically.');
          setProcessing(false);
        }
      },
      onCancel: () => {
        setProcessing(false);
        alert('Transaction cancelled.');
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full max-w-md shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-sm font-bold"
        >
          ✕
        </button>

        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-bold text-white">Payment Received!</h3>
            <p className="text-slate-400 text-xs">
              Thank you for your payment of <span className="text-white font-semibold">GHS {amountGhs}</span>.
              A receipt has been generated.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setEmail('');
                setAmountGhs('');
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
              <p className="text-slate-400 text-xs">Pay retainers or invoices directly via Paystack.</p>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Your Email</label>
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
              <label className="text-xs text-slate-300 font-semibold">Amount (GHS)</label>
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
              disabled={processing}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-lg text-xs transition disabled:opacity-50"
            >
              {processing ? 'Processing Paystack...' : `Pay GHS ${amountGhs || '0'}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}