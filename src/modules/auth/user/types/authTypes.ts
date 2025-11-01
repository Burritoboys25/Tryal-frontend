export interface UserLoginPayload {
  email: string
  password: string
  remember: boolean
}

export interface UserSignupPayload {
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