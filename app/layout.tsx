import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
    metadataBase: new URL("https://bokepstwwarung.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
        description: `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'n88cnhFb4iG2kl16bHF0L7IsOnbYklE0JCu8DHT-x5s',
        yandex: '2fbe67e6175db169',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        "logo": "https://bokepstwwarung.pages.dev/favicon.ico",
        "url": "https://bokepstwwarung.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepstwwarung.pages.dev"
            },
            "foundingDate":"2025-01-27"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bokepstwwarung.pages.dev",
        "description": `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepstwwarung.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
