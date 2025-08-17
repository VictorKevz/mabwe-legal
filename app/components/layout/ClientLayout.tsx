"use client";

import { ThemeProvider } from "../../contexts/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import { FloatingButton } from "../ui/FloatButton";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="w-full flex flex-col justify-between min-h-screen">
        <Header />
        <main className="">{children}</main>
        <FloatingButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
