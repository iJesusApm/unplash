# UNPLASH
## Prueba de React Native - CASE 04

### Technical specifications / References
- Official doc `https://reactnative.dev/docs/getting-started`

## Prerequisites
- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)
- [react-native ref](https://github.com/react-native-community/cli/blob/master/README.md#creating-a-new-react-native-project)

### Set up the development environment
- Ref: `https://reactnative.dev/docs/environment-setup`

#### Commands to display functions.
- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)
Note: Please read the Setup environments section that is below in this file for more information about the execution scripts.


| °   | Command                 | Description                                              | Note                                   |
| --- | ----------------------- | -------------------------------------------------------- | -------------------------------------- |
| 1   | `npm run android`       | Construction of the application in Android emulator.     | # <=> react-native run-android         |
| 2   | `npm run ios`           | Construction of the application in emulator (xcode) iOS. | # <=> react-native run-ios             |
| 3   | `npm run restart`       | Restart the app with a new cache                         | # <=> react-native start --reset-cache |
| 3   | `npm run build-android` | Android source code compilation                          | # compile source code                  |
| 3   | `npm run build-ios `    | Source code compilation for iOS                          | # compile source code                  |

#### Build for testing (ANDROID EXCLUSIVE CASE)

- Note: For a test case, run the command `npm run bundle-android`, go to the android directory with `cd android` and run the command `./gradlew assembleDebug`. This will generate an unsigned apk for android tests in the folder: `project/android/app/build/outputs/apk/debug/app-debug.apk`

### Folder Structure

```
    .
    ├── assets                  # Graphics files like as images and icons
    ├── components              # Shared component)
    ├── hooks                   #
    ├── navigator               # React-navigation implementation
    ├── services                # External conections like as API, graphQL request
    └── views                   # app screens
```

### Notes

- The app was created using react-native cli.
- Packages and dependencies used for crafting are in the package.json file.
- The animations has been created by `react-native-animatable@^1.3.3`
- The react versión has been `react@^17.0.2`
- The React Native version has been `react-native@^0.67.2`



