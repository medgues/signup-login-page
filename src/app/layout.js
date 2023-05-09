import "./globals.css";

export const metadata = {
  title: "signup",
  description: "signup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
