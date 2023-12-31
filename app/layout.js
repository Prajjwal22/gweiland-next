import "./globals.css";

import { qualy } from "./font";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={qualy.className}>{children}</body>
    </html>
  );
}
