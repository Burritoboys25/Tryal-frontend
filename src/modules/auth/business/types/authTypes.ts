export interface BusinessLoginPayload {
  email: string
  password: string
  remember: boolean
}

export interface BusinessSignupPayload {
  email: string
  password: string
}

export interface JwtBusiness {
  id: string
  accessToken: string
  refreshToken: string
}