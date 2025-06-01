export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  remember?: boolean
}

export interface UserBookmark {
  user_bookmarks_id: string
  user_id: string
  business_id: string
}
