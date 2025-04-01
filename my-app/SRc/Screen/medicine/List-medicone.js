import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Item from "./Item/Item";
import styles from "./List-medicine.styles";

function Listmedicine() {
    const {list, Setsanpham} = useSelector(state => state.Medicines);
    const navigation = useNavigation();
    const [text,settexxt ] = useState('');

    const  result=[];
    for (let i = 0; i < list.length; i++) {
        if(list[i].name.toLowerCase().includes(text.toLowerCase())) {
            result.push(list[i]);
        }   
    }

    
    const onsrech = (text) => {
       settexxt(text);
    }

    const dispatch = useDispatch();
    return (       
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.cartbuttom}
                     onPress={()=>{
                        {Setsanpham}
                        navigation.navigate('Giohang')
                    }}
                >
                        <Ionicons name="cart-outline" size={30} color="#cb4335"  />
                </TouchableOpacity>
            </View>
            <View  style={styles.container1} >
                <TouchableOpacity style={styles.combo}>
                    <Text>
                        Phân loại
                    </Text>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input}
                    placeholder="tìm kiếm theo tên thuốc"    
                    onChangeText={onsrech}    
                        />
            </View> 
            <View>
                {result.length===0 && <Text>không tìm thấy tên </Text>}
                <FlatList 
                        data={list}
                        renderItem={({item})  => <Item data={item} />}
                        keyExtractor={item => item.id}
                    />
            </View>
        </View>
    );
}
export default Listmedicine;