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

export interface BusinessLoginPayload {
  email: string
  password: string
  remember: boolean
}

export interface BusinessSignupPayload {
  email: string
  password: string
}

export interface JwtBase {
  id: string
  accessToken: string
  refreshToken: string
  accountType: 'BUSINESS' | 'USER'
}