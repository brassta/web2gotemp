// This file can be replaced during build by using the `fileReplacements` array.;
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production      : true,
    // SignalRDevTest: 'http://192.168.150.20:64579/CommHub',
    // SignalRTest: 'http://192.168.150.20:64579/CommHub'
    // SignalRDevTest  : 'http://192.168.150.20:7766/hubs/authhub',
    // SignalRTest   : 'http://192.168.150.20:7777/CommHub',
    // SignalRTest   : 'http://192.168.150.20:7899/hubs/authhub',
    // SignalRTest     : 'http://192.168.150.147:5002/hubs/authhub',
    SignalRTest     : 'http://192.168.150.20:7777/CommHub',
    // SignalRDevTest: 'http://192.168.161.12:80/CommHub',
    // SignalRTest   : 'http://192.168.161.12:80/CommHub'
    // pathToLogin     : 'http://192.168.150.147:5000',
    // pathToLogin     : 'http://localhost/soloplan/login-plain',
    pathToLogin     : 'http://localhost/soloplan/login-plain/',
    // refreshTokenPath: 'http://192.168.1.2:5000/connect/token'
    // refreshTokenPath: 'http://192.168.1.2:5000/connect/token'
    refreshTokenPath: 'http://192.168.150.147:5000/connect/token'
};

/*
* For easier debugging in development mode, you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out in production mode because it will have a negative impact
* on performance if an error is thrown.
*/
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
