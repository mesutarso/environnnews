import { initAuth0 } from '@auth0/nextjs-auth0';
import dotenv from 'dotenv'

dotenv.config()

export default initAuth0({
  //audience: process.env.NEXT_PUBLIC_Audiance,
  domain: process.env.NEXT_PUBLIC_Auth0_Domain,
  clientId: process.env.NEXT_PUBLIC_Auth0_ID,
  clientSecret: process.env.NEXT_PUBLIC_Auth0_Secret,
  scope: process.env.NEXT_PUBLIC_Scope,
  redirectUri: process.env.NEXT_PUBLIC_redirectUri,
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_postLogoutRedirectUri,
  session: {

    cookieSecret: process.env.NEXT_PUBLIC_Auth0_cookieSecret,
    cookieLifetime: 60 * 60 * 8,
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false
  },
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 4500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 20000
  }
});