import CheckoutForm from './CheckoutForm'
import { Suspense } from 'react'

const CheckoutPage = () => {
  return (
    <div id="checkout">
      <Suspense fallback={<p>Loading checkout...</p>}>
        <CheckoutForm />
      </Suspense>
    </div>
  )
}

export default CheckoutPage
