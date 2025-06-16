export interface LoginPayload {
  email: string
  password: string
  remember: boolean
}

export interface SignupPayload {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface JwtUser {
  id: string
  accessToken: string
  refreshToken: string
}