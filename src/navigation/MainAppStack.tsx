import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import MainAppBottomTab from "./MainAppBottomTab";

const Stack = createStackNavigator();

const MainAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="MainApp" component={MainAppBottomTab} />
    </Stack.Navigator>
  );
};

export default MainAppStack;