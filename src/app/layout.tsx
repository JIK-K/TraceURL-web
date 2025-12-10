import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://traceurl.com"),
  title: {
    default: "TraceURL | 강력한 URL 단축 & 트래킹 서비스",
    template: "%s | TraceURL",
  },
  description:
    "TraceURL은 빠르고 안정적인 URL 단축, 클릭 분석, GeoIP, QR 코드 생성 등 강력한 트래킹 기능을 제공하는 링크 관리 플랫폼입니다.",
  keywords: [
    "URL 단축",
    "링크 단축",
    "URL Shortener",
    "링크 분석",
    "트래킹",
    "GeoIP",
    "QR 코드",
    "Shortify",
    "TraceURL",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://traceurl.com",
    siteName: "TraceURL",
    title: "TraceURL | URL 단축 & 클릭 트래킹 서비스",
    description:
      "단축 링크 생성부터 클릭 분석까지. TraceURL로 더 스마트한 링크 관리를 시작하세요.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "TraceURL Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TraceURL | URL 단축 & 트래킹 서비스",
    description: "더 빠르게, 더 정확하게. TraceURL로 스마트한 링크 관리를.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://traceurl.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-brand ${pretendard.className}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
