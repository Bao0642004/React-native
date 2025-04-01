import { View , Text, TouchableOpacity, Image} from "react-native";
import Styles from "./Item.styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Giamsoluong, Tangsoluong } from "../../../Redux/Medicines/Medicines.slice";
import Ionicons from '@expo/vector-icons/Ionicons';

const Item = ({data1}) =>{

   
  
    const dispatch = useDispatch();
    return(
        <View style={Styles.container} >
            <Image style={Styles.image}  source={{uri:data1.image1}}/>
        
            <View style={Styles.infobox}>
                <Text  style={Styles.productname}>{data1.name}  </Text>
                <Text  style={Styles.productprice}>{data1.Gia} VND </Text>
            </View>
           <View style={Styles.soluong}>
                <TouchableOpacity style={Styles.cartbuttom}
                    onPress={() => {
                     dispatch(
                        Giamsoluong({id:data1.id})
                     )
                    }}
                >
                    <Ionicons name="arrow-down-outline" size={10} color="#fff" />
                </TouchableOpacity>
                <Text style={Styles.Textsoluong}  >
                       {data1.Soluong}
                </Text>
                <TouchableOpacity style={Styles.cartbuttom} 
                 onPress={() => {
                    dispatch(
                        Tangsoluong({id:data1.id})
                    )
                }}>
                    <Ionicons name="arrow-up-outline" size={10} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Item;