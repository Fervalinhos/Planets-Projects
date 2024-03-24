import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Planetary from "../screens/Planetary";
import PlanetInfo from "../screens/PlanetInfo";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Planetary" component={Planetary} />
            <Stack.Screen name="PlanetInfo" component={PlanetInfo} />
        </Stack.Navigator>
    );
};

export default StackRoutes;