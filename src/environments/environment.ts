// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiKeys: {
    Blizzard: {
      apiKey: "3p32rjh7kpgmuehb7972jr82gqj2dg4w",
      secret: "U4tYNR8YyMTu8WkfKKdNchZ78sWshM94"
    },
    Firebase: {
      apiKey: "AIzaSyBNxMx_QYaxv5crRMGS1NhAq6nCr3LsMFs",
      authDomain: "warcraftdashboard-bc5d5.firebaseapp.com",
      databaseURL: "https://warcraftdashboard-bc5d5.firebaseio.com",
      projectId: "warcraftdashboard-bc5d5",
      storageBucket: "",
      messagingSenderId: "1016864854836"
    },
  }
};
