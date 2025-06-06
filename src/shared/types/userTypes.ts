export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  remember?: boolean
}
export interface UserBookmarks {
  userId: string
  businessIds: string[]
}
