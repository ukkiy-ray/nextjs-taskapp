import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    console.log(`ミドルウェア: ${request.method} ${request.nextUrl.pathname}`);
    return NextResponse.next();
}

// ミドルウェアを適用するルートを指定
export const config = {
    matcher: ['/api/:path*', '/sa/:path*'],
}