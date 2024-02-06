"use client";

import { ThemeProvider } from "next-themes";
import 'react-notifications/lib/notifications.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
