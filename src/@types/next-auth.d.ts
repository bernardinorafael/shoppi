import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  type User = {
    id: string
    name: string
    email: string
    avatar_url: string
  }

  type Session = {
    user: User
  }
}
