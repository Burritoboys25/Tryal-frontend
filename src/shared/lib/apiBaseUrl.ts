// This should only be used if we are making calls directly to server from client. If not, use the server-side API routes
const API_BASE_URL = process.env.NEXT_PUBLIC_URL
export default API_BASE_URL
