import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SheetProvider } from 'react-native-actions-sheet';
import MainAppStack from './src/navigation/MainAppStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
      <SheetProvider>
        <MainAppStack />
      </SheetProvider>
    </NavigationContainer>
    </SafeAreaProvider>
  
  );
}

const styles = StyleSheet.create({});

export default App;
