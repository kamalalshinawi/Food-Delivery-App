import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SheetProvider } from 'react-native-actions-sheet';
import MainAppStack from './src/navigation/MainAppStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <SheetProvider>
          <MainAppStack />
        </SheetProvider>
      </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
