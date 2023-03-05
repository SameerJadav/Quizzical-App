import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {};
export const metadata = {
  title: {
    default: "Quizzical",
    template: "%s | Quizzical",
  },
  description:
    "Unleash your trivia prowess with the exciting and challenging Quizzical app! This single player game boasts a sleek and user-friendly interface that is sure to keep you engaged for hours. With a wide range of categories and topics, you'll never run out of questions to answer. Test your knowledge, refine your skills, and become a master of trivia with the Quizzical app – the ultimate in entertaining and educational gaming experiences.",
  keywords: [
    "quiz game",
    "quiz app",
    "trivia",
    "quizzical app",
    "nextjs 13",
    "nextjs",
    "react",
    "tailwind",
  ],
  // canonical: "https://sameerjadav.me",
  openGraph: {
    title: "Quizzical",
    description:
      "Unleash your trivia prowess with the exciting and challenging Quizzical app! This single player game boasts a sleek and user-friendly interface that is sure to keep you engaged for hours. With a wide range of categories and topics, you'll never run out of questions to answer. Test your knowledge, refine your skills, and become a master of trivia with the Quizzical app – the ultimate in entertaining and educational gaming experiences.",
    // url: "https://sameerjadav.me",
    siteName: "Quizzical",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Quizzical",
    description:
      "Unleash your trivia prowess with the exciting and challenging Quizzical app! This single player game boasts a sleek and user-friendly interface that is sure to keep you engaged for hours. With a wide range of categories and topics, you'll never run out of questions to answer. Test your knowledge, refine your skills, and become a master of trivia with the Quizzical app – the ultimate in entertaining and educational gaming experiences.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
