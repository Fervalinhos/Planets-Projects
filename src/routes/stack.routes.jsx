import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Category from "../screens/About";
import Planetary from "../screens/Planetary";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Profile" component={Planetary} />
        </Stack.Navigator>
    );
};

export default StackRoutes;