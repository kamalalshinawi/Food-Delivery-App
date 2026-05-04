# myApp — Food Ordering React Native App

A modern, cross-platform **React Native 0.85 + React 19** food ordering mobile app built with **TypeScript**. It features authentication, a beautiful animated bottom tab bar, food browsing, search, and a fully persistent shopping cart powered by **Redux Toolkit** and **Redux Persist**.

> Bootstrapped with [`@react-native-community/cli`](https://github.com/react-native-community/cli).

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots / Screens](#screenshots--screens)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Troubleshooting](#troubleshooting)

---

## Features

- Authentication flow (Sign In / Sign Up) with **Yup** validation and a Lottie-powered success bottom sheet.
- Custom **animated bottom tab bar** with active-state scaling, smooth transitions, and a live cart badge.
- Home screen with promotional banners.
- Search screen with real-time client-side filtering of food items.
- Cart with quantity increase/decrease, item removal, delivery fee, and total computation.
- Profile screen with user details and logout.
- **Persistent cart** — items survive app restarts via Redux Persist + AsyncStorage.
- Responsive layout using `react-native-size-matters` (`s`, `vs`, `ms`).

---

## Tech Stack

| Category            | Library                                                           |
| ------------------- | ----------------------------------------------------------------- |
| Core                | React Native `0.85`, React `19`, TypeScript `5`                   |
| Navigation          | `@react-navigation/native`, `stack`, `bottom-tabs`                |
| State Management    | `@reduxjs/toolkit`, `react-redux`                                 |
| Persistence         | `redux-persist`, `@react-native-async-storage/async-storage`      |
| Forms / Validation  | `yup`                                                             |
| Animations          | `react-native-reanimated`, `react-native-worklets`, `lottie-react-native` |
| UI / UX             | `react-native-actions-sheet`, `react-native-vector-icons`, `react-native-svg` |
| Layout              | `react-native-safe-area-context`, `react-native-screens`, `react-native-gesture-handler` |
| Responsiveness      | `react-native-size-matters`                                       |

---

## Screenshots / Screens

The app currently ships with the following screens:

- **Auth** — `SignIn`, `SignUp`
- **Home** — banners and promotions
- **Search** — searchable food list with "Add to cart"
- **Cart** — item list, totals, delivery fee, checkout button
- **Profile** — user info and logout

---

## Project Structure

```text
myApp/
├── android/                   # Native Android project
├── ios/                       # Native iOS project
├── src/
│   ├── assets/                # Fonts, icons, images, Lottie files
│   ├── components/            # Reusable UI components (Buttons, Inputs, Cards…)
│   ├── constants/             # Static data (foodData, delivery fee, …)
│   ├── navigation/
│   │   ├── MainAppStack.tsx   # Root stack: Auth | MainApp
│   │   ├── AuthStack.tsx      # SignIn / SignUp
│   │   └── MainAppBottomTab.tsx  # Custom animated bottom tab bar
│   ├── screens/
│   │   ├── Auth/              # SignIn, SignUp
│   │   ├── Home/              # HomeScreen
│   │   ├── Search/            # SearchScreen
│   │   ├── cart/              # cart
│   │   └── Profile/           # ProfileScreen
│   ├── sheets/                # Action sheets (e.g. LoginSuccessSheet)
│   ├── store/
│   │   ├── store.ts           # Redux store + persistor setup
│   │   ├── persisted/
│   │   │   └── persistConfig.ts  # Per-slice redux-persist config (Cart)
│   │   └── reducers/
│   │       └── CartSlice.ts   # Cart slice (add / decrease / remove)
│   ├── styles/                # Colors, fonts, shared styles
│   └── utils/                 # Yup validation schemas, helpers
├── App.tsx                    # App root: Provider + PersistGate + Navigation
└── index.js                   # RN entry point
```

---

## State Management

State is managed with **Redux Toolkit**. The cart slice exposes three reducers — `addToCart`, `deleteFromCart`, and `emptyCard` — and lives in `src/store/reducers/CartSlice.ts`.

### Redux Persist (per-slice setup)

The app uses a **per-slice persistence** strategy: each slice that needs to survive restarts gets wrapped in its own `persistReducer` and is then mounted in the store. Only the `cartSlice` is currently persisted, using **AsyncStorage** as the storage engine.

The persist config lives in its own module at `src/store/persisted/persistConfig.ts`:

```1:14:src/store/persisted/persistConfig.ts
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartSlice from '../reducers/CartSlice';

const persistConfig = {
  key: 'Cart',
  storage: AsyncStorage,
  whitelist: ['items'],
};

export const persistCartSlice = persistReducer(
  persistConfig,
  cartSlice.reducer,
);
```

> The `whitelist: ['items']` whitelists fields **inside** the cart slice's state — only the `items` array is written to AsyncStorage.

The store imports the wrapped reducer and ignores the `redux-persist` lifecycle actions in the serializability check, then exports a `persistor` that the app passes to `<PersistGate>`:

```12:24:src/store/store.ts
export const store = configureStore({
    reducer:{
        cartSlice: persistCartSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store);
```

```10:23:App.tsx
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <SafeAreaProvider>
      <NavigationContainer>
        <SheetProvider>
          <MainAppStack />
        </SheetProvider>
      </NavigationContainer>
    </SafeAreaProvider>
    </PersistGate>
    </Provider>
  );
}
```

**Result:** the cart contents survive full app restarts.

### Adding more persisted slices

Because persistence is configured per-slice, adding another persisted slice is a two-step process:

1. Create a new persisted reducer in `src/store/persisted/persistConfig.ts` (or a new file alongside it):

   ```ts
   const authPersistConfig = {
     key: 'Auth',
     storage: AsyncStorage,
     whitelist: ['user', 'token'],
   };

   export const persistAuthSlice = persistReducer(
     authPersistConfig,
     authSlice.reducer,
   );
   ```

2. Mount it in the store's `reducer` map in `src/store/store.ts`:

   ```ts
   export const store = configureStore({
     reducer: {
       cartSlice: persistCartSlice,
       authSlice: persistAuthSlice,
     },
     // ...middleware
   });
   ```

---

## Getting Started

> **Note**: Make sure you have completed the [React Native — Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Prerequisites

- **Node.js** `>= 22.11.0`
- **Yarn** or **npm**
- **Android Studio** (for Android) and/or **Xcode** + **CocoaPods** (for iOS)

### 1. Install dependencies

```sh
yarn install
# or
npm install
```

### 2. iOS — install pods

```sh
bundle install            # first-time only
bundle exec pod install
```

### 3. Start Metro

```sh
yarn start
# or
npm start
```

### 4. Run the app

#### Android

```sh
yarn android
# or
npm run android
```

#### iOS

```sh
yarn ios
# or
npm run ios
```

If everything is set up correctly, the app launches in the Android Emulator, iOS Simulator, or your connected device.

---

## Available Scripts

| Script           | Description                                |
| ---------------- | ------------------------------------------ |
| `yarn start`     | Start the Metro bundler                    |
| `yarn android`   | Build & run the Android app                |
| `yarn ios`       | Build & run the iOS app                    |
| `yarn lint`      | Run ESLint over the project                |
| `yarn test`      | Run the Jest test suite                    |

---

## Troubleshooting

- **Metro cache issues:** `yarn start --reset-cache`
- **Android build errors:** `cd android && ./gradlew clean && cd ..`
- **iOS build errors:** `cd ios && pod deintegrate && pod install && cd ..`
- **Cart not clearing during development:** Redux Persist keeps the cart in AsyncStorage. Reinstall the app or call `persistor.purge()` to wipe it.

For more general issues, see the official [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

---

## Learn More

- [React Native](https://reactnative.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [React Navigation](https://reactnavigation.org)
