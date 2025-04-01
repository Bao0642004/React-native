import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { Setdetall, Themsanpham } from "../../../Redux/Medicines/Medicines.slice";
import Styles from "./Itemm.styles";
const Item = ({data}) =>{
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return(
        <View style={Styles.container}>
            <Image style={Styles.image}   source={{uri:data.image1}}/>
            <TouchableOpacity data={data}
            onPress={()=>{
                dispatch(
                    Setdetall(data),
                  
                ),
                navigation.navigate('Chitiet')
            }}
            style={Styles.infobox}>
                <Text  style={Styles.productname}>{data.name} </Text>
                <Text  style={Styles.productprice}>{data. Gia} VND</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.cartbuttom}
                onPress={() => { 
                    dispatch(
                        Themsanpham({id:data.id})
                    )
                }}
            >
                      <Ionicons name="add-outline" size={30} color="#ffff" />
            </TouchableOpacity>
        </View>
    );
}
export default Item;