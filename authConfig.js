const msalConfig = {
  auth: {
    clientId: "c9998b86-f45a-4dd3-9fd4-f670256f2c53",
    authority: "e6ac1d1f-d695-4ef1-91d4-94cddef8be11",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["openid", "profile", "User.Read", "Calendar.Read"],
};

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
  scopes: ["Mail.Read", "Calendar.Read"],
};
