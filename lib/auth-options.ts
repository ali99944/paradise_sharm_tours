import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 
    },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'admin'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'password'
                }
            },
            async authorize(credentials) {
                const manager = await prisma.managers.findFirst({
                    where: {
                        email: credentials?.email,
                        password: credentials?.password
                    }
                });

                if (manager) {
                    return {
                        name: manager.name,
                        email: manager.email,
                    } as User
                }

                return null
            },
        })
    ],

    
    pages: {
        signIn: '/admin/login'
    }
}