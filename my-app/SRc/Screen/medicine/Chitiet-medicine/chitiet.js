import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Addbutton from "../../../components/back-button/Back-button";
import { Themsanpham } from "../../../Redux/Medicines/Medicines.slice";
import styles from "./chitiet.styles";


const Chitiet = ({navigation,data}) =>{
    const {detall} = useSelector(state => state.Medicines)
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     if(detall != null){
    //         setname(detall.name);
    //         setprice(detall.price);
    //         setimage(detall.image);
    //     }
    //    },[detall])

    return(
    
        <View style={styles.container}>                 
            <Image style={styles.image} source={{uri:detall.image1}}/>
            <View style={styles.infobox}>
                <Text style={styles.productname}>{detall.name}</Text>
                <Text style={styles.productprice}>{detall.Gia}</Text>
                <Text style={styles.Mota}>{detall.Mota}</Text>
           </View>  
           <TouchableOpacity style={styles.Them}
           onPress={()=>{
               dispatch(                
                 Themsanpham({id:detall.id})
                );
                 navigation.navigate('Giohang')
             }}
           >
                <Text>Them sản phẩm</Text>
            </TouchableOpacity>
            <Addbutton 
                onPress={()=>
                navigation.goBack()
            }/>  
        </View>
     
    );
}
export default Chitiet;