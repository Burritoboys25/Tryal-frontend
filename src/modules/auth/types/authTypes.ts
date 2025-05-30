export interface LoginPayload {
  email: string
  password: string
}

export interface SignupPayload {
  firstName: string
  lastName: string
  email: string
  passwordHash: string
}