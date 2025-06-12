"use client";

import ChakraProviderWrapper from "./chakraProviders/providers";
import Navigation from "./Navigation/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProviderWrapper>
          <Navigation />
          {children}
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}
