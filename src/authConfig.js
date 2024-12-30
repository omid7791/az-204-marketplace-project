import { LogLevel } from "@azure/msal-browser";

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_SiginSignup_Marketplace",
    editProfile: "B2C_1_ProfileEditPolicy",
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://az204marketplace.b2clogin.com/az204marketplace.onmicrosoft.com/B2C_1_SiginSignup_Marketplace",
    },
    editProfile: {
      authority:
        "https://az204marketplace.b2clogin.com/az204marketplace.onmicrosoft.com/B2C_1_ProfileEditPolicy",
    },
  },
  authorityDomain: "az204marketplace.b2clogin.com",
};

export const msalConfig = {
  auth: {
    clientId: "4252a4ec-6651-4137-b736-2a898697de2b", // Replace with your Azure AD Client ID
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: "http://localhost:3000", // Replace with your app's URL
  },
  cache: {
    cacheLocation: "localStorage", // or "sessionStorage"
    storeAuthStateInCookie: false, // Set to true for IE11/Edge compatibility
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["https://az204marketplace.onmicrosoft.com/az204marketplaceapi/read"], // Define permissions your app requires
};
