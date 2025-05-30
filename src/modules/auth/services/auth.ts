import { APIFieldError } from "../lib/errors"
import { LoginPayload, SignupPayload } from "../types/authTypes"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const loginUser = async ({ email, password }: LoginPayload) => {
  const res = await fetch(`${API_BASE_URL}/api/auth/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Login failed')
  }

  return data
}

export const signupUser = async (payload: SignupPayload) => {
  const res = await fetch(`${API_BASE_URL}/api/auth/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok) {
    const fieldErrors = data.errors || {};
    const message = data.message || 'Signup failed';
    throw new APIFieldError(message, fieldErrors);
  }

  return data
}
