import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-sans" });

export const metadata = {
  title: "Verity Relocation — Your utilities. Handled.",
  description: "We activate your Duke Energy, schedule your Google Fiber installation, and coordinate your city water — so you can focus on moving in, not waiting on hold. $199 flat fee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "'DM Sans', sans-serif", background: "#F7F5F0" }} className={dmSans.variable}>
        {children}
      </body>
    </html>
  );
}
