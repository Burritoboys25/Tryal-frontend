/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/base/button'
import FormField from '@/shared/components/ui/forms/FormField'
import CheckboxField from '@/shared/components/ui/forms/CheckboxField'
import { useState } from 'react'
import { LoginFormData, loginFormSchema } from '../validations/login.schema'
import { useSession, signIn, signOut } from 'next-auth/react'
import { cn } from '@/shared/lib/utils'
import LogoutButton from './LogoutButton'

const LoginForm = () => {
  const { data: session } = useSession()

  const [form, setForm] = useState<LoginFormData>({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})
  const [remember, setRemember] = useState(false)

  const handleChange = () => {
    setRemember(!remember)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFieldErrors({})

    try {
      const result = loginFormSchema.safeParse(form)

      if (!result.success) {
        setFieldErrors(result.error.flatten().fieldErrors)
        return
      }

      const validData = {
        ...result.data,
        remember,
      }

      const authenticateLogin = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      })

      if (authenticateLogin?.error) {
        setFieldErrors({
          authentication: ['Invalid email or password'],
        })
        return
      }

      console.log('Form Data:', validData)
      setSuccess(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="-mt-[72px] flex min-h-screen w-full items-center bg-white px-4 py-16 md:px-12 md:py-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 md:flex-row">
        <div className="max-w-lg">
          <div className="mb-8 space-y-3">
            <h1 className="text-h1">Welcome Back!</h1>
            <p className="text-muted-foreground text-body2">
              Enter your email and password to log into your account.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-[365px] space-y-[10px] text-left"
            noValidate
          >
            <FormField
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              error={fieldErrors.email?.[0]}
            />

            <FormField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              error={fieldErrors.password?.[0]}
            />
            <div className="flex justify-between">
              <CheckboxField
                label={<p className="text-caption2">Remember me</p>}
                name={'remember'}
                value={remember}
                checked={remember}
                onChange={() => {
                  handleChange()
                }}
              />
              <Link href="/" className="text-info text-caption1">
                Forgot password?
              </Link>
            </div>
            {session ? (
              <LogoutButton className="mt-[22px] w-full cursor-pointer rounded-full" />
            ) : (
              <Button
                type="submit"
                className="mt-[22px] w-full cursor-pointer rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Log In'}
              </Button>
            )}
            {fieldErrors.authentication && (
              <p
                className={cn(
                  'text-destructive text-xs',
                  'transition-opacity duration-300 ease-in-out',
                  'opacity-100',
                )}
              >
                {fieldErrors.authentication[0]}
              </p>
            )}
          </form>
          <div>
            <p className="text-caption2 mt-3">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-info text-caption1">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="relative z-0 flex h-[450px] w-full justify-center bg-gray-200 md:w-1/2"></div>
      </div>
    </section>
  )
}

export default LoginForm
