import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarSnap | Car shopping, simplified.",
  description:
    "CarSnap is a free app that uses AI to help you find your next car. Simply snap a photo of a car you like, and we'll show you all the info you might need to buy one just like it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Ek8nM+m5f+koNrRN6/8s6O8HHwKSxHEFCnYNOxwqHDQqYEGQYC4oTDlh8nZTFm+4QiYgEZ6qFb+3SLu6Cz0Dg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
