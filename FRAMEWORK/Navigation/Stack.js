import { createStackNavigator } from "@react-navigation/stack";
import { FundingWallet } from "../Screens/FundingWallet";
import { Method } from "../Screens/method";

const Stack = createStackNavigator()
export function Stacknavigator() {
    return(
        <Stack.Navigator initialRouteName="FundingWallet">
            <Stack.Screen name="FundingWallet" component={FundingWallet}/>
            <Stack.Screen name="Method" component={Method}/>
        </Stack.Navigator>
    )

}
