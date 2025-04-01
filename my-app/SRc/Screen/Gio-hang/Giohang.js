import { View,Text,TouchableOpacity,FlatList } from "react-native";
import Styles from "./Giohang.styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSelector,  useDispatch } from "react-redux";
import Thanhtoan from "../Thanhtoan/Thanhtoan";
import Addbutton from "../../components/back-button/Back-button";
import Item from "./Item/Item";
import withAuth from "../../Hoc/witauth";


const Giohang = () =>{
    const navigation = useNavigation();
    const dispatch = useDispatch();
  
    // const {detall } = useSelector(state => state.Medicines)
    const {detall, Setsanpham, Soluong} = useSelector(state => state.Medicines)
    let Tongtien =0;
    for (let i=0; i< Setsanpham.length; i++) {
        Tongtien += Setsanpham[i].Soluong * Setsanpham[i].Gia;
       
    }
  
 
    return(
      
        <View style={Styles.containers}>
        <View style={Styles.container}>
            <FlatList
                        data={Setsanpham}
                        renderItem={({item})  => <Item data1={item}/>}
                        keyExtractor={item => item.id}
            />

        </View>
       <View style={Styles.Thanhtoanview}>
                <View style={Styles.Viewtien}>
                    <Text style={Styles.Text}>
                        Tổng tiền:
                    </Text>
                    <Text style={Styles.Textsotien}              >
                           {Tongtien}000 VND           
                    </Text>
                </View>             
         <TouchableOpacity style={Styles.Thanhtoan}
            onPress={()=>{
               
                 navigation.navigate('Thanhtoan')
             }}
          
         >
                <Text style={Styles.Textthanhtoan}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
          <Addbutton 
                onPress={()=>
                    
                navigation.goBack()
            }/>  
        </View>
     
    );
}
export default withAuth(Giohang);