import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },

            async authorize(credentials){
                try {
                    if(!credentials?.email || !credentials?.password){
                        throw new Error('Email and password are required.')
                    }

                    const response = await fetch("http://localhost:8080/api/auth/login", {
                        method: 'POST',
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    })

                    if(!response.ok){
                        throw new Error('Internal server error.')
                    }

                    const user = await response.json()

                    return user
                } catch (error) {
                    console.error(error)
                    return null
                }
                
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
        signOut: '/login',
    },
    callbacks: {
        async jwt({ token, user }){
            if (user) {
                token.id = user.id
                token.email = user.email
                token.firstName = user.firstName
                token.lastName = user.lastName
            }

            return token
        },
        async session({ session, token }){
            if(token){
                session.user = {
                    id: token.id,
                    email: token.email,
                    firstName: token.firstName,
                    lastName: token.lastName
                }
            }

            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }