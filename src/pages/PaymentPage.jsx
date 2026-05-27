import { useState, useEffect } from 'react'
import Title from '../components/Title'

const fieldClass = 'w-full rounded-lg border border-(--card-border) bg-(--dark-bg) px-4 py-3 text-(--title-color) outline-none transition focus:border-(--primary-color) focus:ring-2 focus:ring-sky-400/20'
const labelClass = 'block pb-2 text-sm font-bold text-(--title-color)'
const helpClass = 'pt-2 text-sm font-medium leading-6 text-(--text-color)'

const PaymentPage = () => {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handlePayment = (e) => {
    e.preventDefault()
    
    if (!window.PaystackPop) {
      alert('Paystack is still loading. Please try again in a moment.')
      return
    }

    setLoading(true)

    const handler = window.PaystackPop.setup({
      key: 'pk_live_a5570595788b649e2ec64179c72bd4f456b77286',
      email: email,
      amount: amount * 100,
      currency: 'GHS',
      callback: (response) => {
        setLoading(false)
        alert('Payment successful! Reference: ' + response.reference)
      },
      onClose: () => {
        setLoading(false)
        console.log('Window closed.')
      },
    })

    handler.openIframe()
  }

  return (
    <main className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(102,227,255,0.12),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(255,209,102,0.08),transparent_28%),var(--dark-bg)] text-(--text-color) font-sans selection:bg-sky-400/25'>
      <div className='mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-12 xl:px-20'>
        <section className='pt-8 sm:pt-12'>
          <Title title='Secure Checkout' />

          <div className='grid grid-cols-1 gap-8 pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14'>
            <aside className='lg:sticky lg:top-28 lg:self-start'>
              <h1 className='max-w-3xl text-3xl font-black leading-tight text-(--title-color) sm:text-5xl'>
                Complete your payment.
              </h1>
              <p className='pt-5 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
                Payments are processed securely through Paystack.
              </p>

              <div className='interactive-card mt-8 rounded-lg p-5'>
                <h2 className='text-lg font-bold text-(--title-color)'>Payment Methods</h2>
                <ul className='space-y-3 pt-4 text-sm font-medium leading-6 text-(--text-color)'>
                  <li>Mobile Money</li>
                  <li>Visa & Mastercard</li>
                  <li>Bank Transfers</li>
                </ul>
              </div>

              <div className='flex flex-col gap-3 pt-8 font-bold sm:flex-row lg:flex-col'>
                <a
                  href='/#pricing'
                  className='button-pop inline-flex min-h-12 items-center justify-center rounded-lg border border-(--card-border) bg-(--surface-bg) px-5 py-3 text-sm text-(--title-color) sm:text-base'
                >
                  View Pricing
                </a>
              </div>
            </aside>

            <form onSubmit={handlePayment} className='interactive-card rounded-lg p-5 sm:p-6 lg:p-8' autoComplete='on'>
              <div>
                <h2 className='text-2xl font-bold text-(--title-color)'>Transaction Details</h2>
                <p className={helpClass}>Please enter your billing information to continue.</p>
              </div>

              <div className='space-y-6 pt-6'>
                <div>
                  <label className={labelClass} htmlFor='email'>Email Address</label>
                  <input 
                    id='email' 
                    type='email' 
                    className={fieldClass} 
                    placeholder='you@example.com' 
                    autoComplete='email'
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor='amount'>Amount (GHS)</label>
                  <input 
                    id='amount' 
                    type='number' 
                    className={fieldClass} 
                    placeholder='Enter amount' 
                    autoComplete='transaction-amount'
                    inputMode='decimal'
                    required 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <p className='pt-2 text-xs text-(--text-color)/60 italic'>Min. amount: 1.00 GHS</p>
                </div>
              </div>

              <button 
                type='submit' 
                disabled={loading}
                className='button-pop mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 font-bold text-(--title-color) disabled:opacity-50'
              >
                {loading ? 'Initializing...' : `Pay ${amount ? amount : ''} GHS`}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

export default PaymentPage
