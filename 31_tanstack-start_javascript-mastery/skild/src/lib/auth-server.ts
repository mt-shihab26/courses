import { betterAuth } from 'better-auth'
import { tanstackStartCookies } from 'better-auth/tanstack-start'

export const authServer = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    plugins: [tanstackStartCookies()],
})
