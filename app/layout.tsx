import "@/app/ui/global.css";
import type { Metadata } from "next";
import TanStackProvider from "@/providers/TanStackProvider";
import StoreProvider from "@/store/StoreProvider";
import { PoppinsFont } from "@/app/ui/fonts";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className="bg-bgcolor text-white">
      <head>
        <meta http-equiv="content-language" content="ar" />
      </head>
      <body className={`${PoppinsFont.className} antialiased bg-bgcolor`}>
        <TanStackProvider>
          <Toaster />

          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
