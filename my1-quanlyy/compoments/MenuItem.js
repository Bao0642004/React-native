import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MenuItemStyles } from "../Stylws/Compoments/MenuITem.styles";

const MenuItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Menu", {
          id: item.id,
          name: item.name,
          image: item.image,
          rading: item.rading,
          time: item.time,
          adress: item.adress,
          cost_for_two: item.cost_for_two,
          cuisines: item.cuisines,
          menu: item.menu,
        })
      }
      style={MenuItemStyles.container}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 6 }}
        source={{ uri: item.image }}
        style={MenuItemStyles.image}
      />

      <View style={MenuItemStyles.info}>
        <Text style={MenuItemStyles.name}>{item.name}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <MaterialIcons name="stars" size={24} color="green" />
          <Text style={MenuItemStyles.TExt1}>{item.rating}</Text>
          <Text style={MenuItemStyles.TExt2}>-</Text>
          <Text style={MenuItemStyles.TExt1}>{item.time}</Text>
        </View>
        <Text style={MenuItemStyles.Text3}>{item.adress}</Text>
        <View style={MenuItemStyles.View1}>
          <View style={MenuItemStyles.View2}>
            <Text style={MenuItemStyles.Text4}>VND</Text>
          </View>

          <Text style={MenuItemStyles.TExt5}>{item.cost_for_two} for two</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
          <Text style={{ marginLeft: 6, fontSize: 16 }}>FREE DELIVERY</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default MenuItem;
