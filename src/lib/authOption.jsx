export const authOptions = {
  // Configure one or more authentication providers
  providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',

    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

      const res = await fetch("/your/endpoint", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()

      if (res.ok && user) {
        return user
      }
      return null
    }
  })
  ],
}