import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SheetProvider } from 'react-native-actions-sheet';
import MainAppStack from './src/navigation/MainAppStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

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

const styles = StyleSheet.create({});

export default App;
