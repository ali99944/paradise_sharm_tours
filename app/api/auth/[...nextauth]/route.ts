import { authOptions } from "@/lib/auth-options";
import NextAuth from "next-auth";





export const { GET, POST } = {
    GET: NextAuth(authOptions),
    POST: NextAuth(authOptions)
}

