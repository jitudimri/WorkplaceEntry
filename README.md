# WorkPlace

WorkPlace is a React Native app for managing workplace sessions and activities, featuring user authentication and WiFi-based session validation.

## Features

- User login/logout
- Workplace session entry (requires valid WiFi connection)
- Activity selection and tracking
- Themed UI components
- Error handling and feedback

## Technologies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-router](https://expo.github.io/router/)
- [@react-native-community/netinfo](https://github.com/react-native-netinfo/react-native-netinfo)
- [react-native-permissions](https://github.com/zoontek/react-native-permissions)

## Getting Started

### Prerequisites

- Node.js & npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jitudimri/WorkPlace.git
   cd WorkPlace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run on your device or simulator:
   ```bash
   npm run ios   # for iOS
   npm run android   # for Android
   npm run web   # for web
   ```

## Project Structure

```
app/
  (auth)/login.jsx
  (dashboard)/session.jsx
components/
  ThemedButton.jsx
  ThemedText.jsx
  ThemedTextInput.jsx
  ThemedView.jsx
  Spacer.jsx
contexts/
  WifiContext.jsx
hooks/
  useUser.js
  useWifi.js
constants/
  Colors.js
assets/
  xlogo.jpg
  icon.png
  splash-icon.png
```

## Permissions

- **Android:** Location permission is required to access WiFi information.
- **iOS:** Location permission and "Access WiFi Information" capability are required.

## License

MIT

---
