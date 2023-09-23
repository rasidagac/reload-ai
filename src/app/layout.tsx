import React from "react";
import { Metadata } from "next";
import { ThemeProvider } from "@components/theme-provider";

export const metadata: Metadata = {
  title: 'Reload.AI',
  description: 'My App is a...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div id="root">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
