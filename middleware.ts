import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr';

export default async function middleware(req: NextRequest) {
    let res = NextResponse.next({
        request: {
            headers: req.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return req.cookies.get(name)?.value;
                },
                set(name: string, value: string, options: any) {
                    res.cookies.set({ name, value, ...options });
                },
                remove(name: string, options: any) {
                    res.cookies.set({ name, value: "", ...options });
                },
            },
        }
    );

    const { data: { session } } = await supabase.auth.getSession();

    console.log('--------', session);

    const pathname = req.nextUrl.pathname
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    //Public Path
    const publicPath = [
        '/',
        '/auth',
        '/auth/login',
        '/auth/signup',
        '/auth/forgot-password',
        '/auth/reset-password',
    ];


    if (session && publicPath.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // If not logged in → redirect to login
    if (!session && !publicPath.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    return res;
}

export const config = {
    matcher: ['/((?!_next|api|static|favicon.ico).*)'],
}
