import Styles from "./item.styles";
import { View, Text } from "react-native"

const Item = ({ data1 }) => {

    return (
        <View style={Styles.Sanpham} >
            <View style={Styles.Soluong}>
                <Text>x {data1.Soluong}  </Text>
               
            </View>
            <View style={Styles.info}>
                <Text style={Styles.Texttenthuoc}>{data1.name}</Text>
                <Text style={Styles.Textgia}>{data1.Gia * data1.Soluong}000 VNĐ</Text>
            </View>
        </View>
        
    );
}
export default Item;