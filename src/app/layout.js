"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import React from "react";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "@/authConfig";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  // Default to using the first account if no account is active on page load
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(accounts[0]);
  }

  // Optional - This will update account state if a user signs in from another tab or window
  msalInstance.enableAccountStorageEvents();

  msalInstance.addEventCallback((event) => {
    // console.log(event);
    if (
      event.eventType === EventType.LOGIN_SUCCESS ||
      event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
      event.eventType === EventType.SSO_SILENT_SUCCESS
    ) {
      console.log(event);
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <React.StrictMode>
          <MsalProvider instance={msalInstance}>
            <NavBar>{children}</NavBar>
          </MsalProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}
