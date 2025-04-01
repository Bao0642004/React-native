// Only import react-native-gesture-handler on native platforms
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Giohang from './SRc/Screen/Gio-hang/Giohang';
import Thanhtoan from './SRc/Screen/Thanhtoan/Thanhtoan';
import TabBar from './SRc/components/Tab-bar/Tab-bar';
import Chitiet from './SRc/Screen/medicine/Chitiet-medicine/chitiet';
import Listmedicine from './SRc/Screen/medicine/List-medicone';
import Order from './SRc/Screen/Order/Order';
import Store from './SRc/Redux/Store';
import { Provider } from'react-redux';
import Dangnhap from './SRc/Screen/Login/Login';
import Dangki from './SRc/Screen/Register/Register';
const Stack = createStackNavigator();
const BotTab = createBottomTabNavigator();
export default function App() {
  return (   
    <Provider store={Store}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>               
          <Stack.Navigator screenOptions={{headerShown:false}}>
       
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Chitiet" component={Chitiet} />
            <Stack.Screen name="Giohang" component={Giohang} />
            <Stack.Screen name="Thanhtoan" component={Thanhtoan} />
            <Stack.Screen name="Dangki" component={Dangki} />
          </Stack.Navigator>
          </SafeAreaView>   
        </NavigationContainer>
      </Provider>
  );
}
const Main =()=>(
    <BotTab.Navigator 
      screenOptions={{headerShown:false}}
      tabBar={TabBar}
    >
        <BotTab.Screen 
          name='danh-sach-san-pham' 
          component={Listmedicine}
          options={{tabBarLabel:"Trang chủ", icon:'home-outline'}}
        />
         <BotTab.Screen 
          name='Lich-su-don-hang' 
          component={Order}
          options={{tabBarLabel:"Lich sử đơn hàng", icon:'clipboard-outline'}}
        />
    </BotTab.Navigator>
  
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
});
