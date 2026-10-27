import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "https://explore-ethiopia-ed1irloot-yabsira21s-projects.vercel.app",
  plugins: [adminClient()],
});
