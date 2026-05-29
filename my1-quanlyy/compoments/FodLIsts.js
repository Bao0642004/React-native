import { Image, ScrollView, Text, View } from "react-native";
import { FoodListStyles } from "../Stylws/Compoments/FoodLIsst.styles";

const FodLIsts = () => {
  const types = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGNroVzBRVwk8rMDIue28-1XoYstIyFkqnw&s",
      name: "Biriyani",
    },
    {
      id: "1",
      image:
        "https://images.vexels.com/content/224166/preview/chocolate-dessert-logo-e0c3d4.png",
      name: "Dessert",
    },
    {
      id: "2",
      image:
        "https://png.pngtree.com/png-vector/20211229/ourmid/pngtree-burger-logo-png-image_4137355.png",
      name: "Burger",
    },
    {
      id: "3",
      image: "https://cdn-icons-png.flaticon.com/512/7078/7078755.png",
      name: "Salad",
    },
    {
      id: "4",
      image: "https://cdn-icons-png.flaticon.com/512/1839/1839039.png",
      name: "Sandwiches",
    },
  ];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={FoodListStyles.VIew1} key={index}>
            <Image source={{ uri: item.image }} style={FoodListStyles.Imagw} />
            <Text style={FoodListStyles.Text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FodLIsts;
