//remove git traces
find . -name .git -print0 | xargs -0 rm -rf
find . -name "*.git*" -print0 | xargs -0 rm -rf;
rm -fr .git
git status

yarn add react-hook-form
yarn add @hookform/resolvers
yarn add yup
yarn add @hookform/resolvers
yarn add expo install @react-native-picker/picker
yarn add expo install expo-checkbox

//routes install 
yarn add @react-navigation/native
yarn add expo install react-native-screens react-native-safe-area-context

yarn add @react-navigation/native-stack  
yarn add @react-navigation/bottom-tabs

//install these two for slide push animation import in app gesture
yarn add @react-navigation/stack yarn add expo install react-native-gesture-handler

yarn add @react-navigation/drawer
yarn add react-native-gesture-handler react-native-reanimated
//babel.js
 plugins: [
        ...
        [
            'react-native-reanimated/plugin', {
                relativeSourceLocation: true,
            },
        ]
    ],
//redux
yarn add @reduxjs/toolkit react-redux


yarn add expo install expo-linear-gradient

yarn add expo install @react-native-community/netinfo
yarn add expo install expo-font

yarn add axios

yarn add expo install react-native-svg
yarn add -D react-native-dotenv


yarn add expo install firebase
yarn add expo install @react-native-async-storage/async-storage
yarn add expo install expo-secure-store

yarn add expo install expo-image