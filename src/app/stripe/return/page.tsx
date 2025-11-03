'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ReturnPage = () => {
  const [status, setStatus] = useState<'loading' | 'open' | 'complete' | 'error'>('loading')
  const [customerEmail, setCustomerEmail] = useState('')
  const router = useRouter()

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const sessionId = urlParams.get('session_id')

    if (!sessionId) {
      setStatus('error')
      return
    }

    const fetchSession = async () => {
      try {
        const res = await fetch(`/api/stripe/session?session_id=${sessionId}`)
        if (!res.ok) throw new Error('Failed to fetch session')

        const stripeSession = await res.json()

        setStatus(stripeSession.data.status)
        if (stripeSession.data.customer_email) setCustomerEmail(stripeSession.data.customer_email)

        if (stripeSession.data.status === 'open') {
          router.push('/stripe/checkout')
        }
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
    }

    fetchSession()
  }, [router])

  if (status === 'loading') {
    return <p>Loading your checkout session...</p>
  }

  if (status === 'complete') {
    return (
      <section id="success" className="p-6 text-center">
        <p>
          We appreciate your business! A confirmation email has been sent to <b>{customerEmail}</b>.
        </p>
        <p>
          If you have any questions, please email{' '}
          <a href="mailto:orders@example.com" className="text-blue-600 underline">
            orders@example.com
          </a>
          .
        </p>
      </section>
    )
  }

  if (status === 'open') {
    router.push('/stripe/checkout')
    return <p>Redirecting you back to checkout...</p>
  }

  if (status === 'error') {
    return (
      <section id="error" className="p-6 text-center text-red-600">
        <p>Something went wrong retrieving your checkout session.</p>
      </section>
    )
  }

  return null
}

export default ReturnPage
