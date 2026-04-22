import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
function App() {
  return (
    <NavigationContainer>
      <MainAppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
