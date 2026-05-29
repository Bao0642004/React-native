import { FlatList, SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import ItemOderns from "../compoments/ItemOderns";
import { OderSrceenStyles } from "../Stylws/Srceens/OderSrceen.styles";

const Oderscreen = () => {
  const Hoadon = useSelector((state) => state.cart.Hoadon);

  return (
    <SafeAreaView style={OderSrceenStyles.contaner}>
      <Text style={OderSrceenStyles.text1}>Danh sách hóa đơn</Text>
      {Hoadon.length === 0 ? (
        <Text style={OderSrceenStyles.Text2}>Chưa có hóa đơn nào</Text>
      ) : (
        <FlatList
          data={Hoadon}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemOderns item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Oderscreen;
