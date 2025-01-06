"use client";

import Typography from "@mui/material/Typography";
import {
  MsalAuthenticationTemplate,
  UnauthenticatedTemplate,
  AuthenticatedTemplate,
} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { msalConfig } from "@/authConfig";

export default function Home() {
  const ErrorComponent = ({ error }) => {
    return (
      <Typography variant="h6">An Error Occurred: {error.errorCode}</Typography>
    );
  };

  const ContentComponent = ({ error }) => {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>Protected Products</h1>
        </main>
      </div>
    );
  };

  const Loading = () => {
    return <Typography variant="h6">Authentication in progress...</Typography>;
  };

  return (
    <>
      {/* <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={{ ...msalConfig }}
        errorComponent={ErrorComponent}
        loadingComponent={Loading}
      >
        <ContentComponent />
      </MsalAuthenticationTemplate> */}

      <AuthenticatedTemplate>
        <ContentComponent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Typography variant="h6">
          <center>Please sign-in to see your products information.</center>
        </Typography>
      </UnauthenticatedTemplate>
    </>
  );
}
