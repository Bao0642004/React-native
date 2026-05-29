import Ionicons from "@expo/vector-icons/Ionicons";
import {
  TextInput,
  View,
  ScrollView,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import Carousel from "../compoments/Carousel";
import FodLIsts from "../compoments/FodLIsts";
import QuickFood from "../compoments/QuickFood";
import Hotel from "../data/Hotel";
import MenuItem from "../compoments/MenuItem";
import { HomeStyle } from "../Stylws/Srceens/HomaSrceen,styles";
import Quickdata from "../data/Quickdata";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Homesrceem = () => {
  const navigation = useNavigation();
  const address =
    useSelector((state) => state.cart.selectedAddress) || "Chưa chọn địa chỉ";

  const data = Hotel;
  const data1 = Quickdata;

  return (
    <ScrollView style={HomeStyle.container}>
      <View
        style={{
          width: "96%",
          height: 50,
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 5,
          alignItems: "center",
          margin: 10,
          paddingHorizontal: 8,
        }}
      >
        <MaterialCommunityIcons name="google-maps" size={24} color="#E52B50" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Maps")}
          style={{
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text
            style={{ fontSize: 15, fontWeight: "700", marginRight: 6, flex: 1 }}
            numberOfLines={1}
          >
            {address}
          </Text>
          <FontAwesome name="chevron-right" size={14} color="black" />
        </TouchableOpacity>
      </View>

      <View style={HomeStyle.view1}>
        <TextInput
          style={HomeStyle.Textinput}
          placeholder="Search for Restaurant, item or more"
        />
        <Ionicons
          name="search"
          size={24}
          color="#E52B50"
          style={HomeStyle.icon1}
        />
      </View>
      <Carousel />
      <FodLIsts />
      <QuickFood item={data1} />

      <View style={HomeStyle.view2}>
        <Pressable style={HomeStyle.filterButton}>
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={24} color="black" />
        </Pressable>
        <Pressable style={HomeStyle.filterButton}>
          <Text>Sort by Rating</Text>
        </Pressable>
        <Pressable style={HomeStyle.filterButton}>
          <Text>Sort by Price</Text>
        </Pressable>
      </View>

      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default Homesrceem;
