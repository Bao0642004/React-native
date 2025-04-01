import { View,Text, TouchableOpacity,ScrollView,FlatList } from "react-native";
import Styles from "./Thanhtoan.styles";
import User from "./User/User";
import { useNavigation } from "@react-navigation/native";
import { useSelector ,useDispatch} from "react-redux";
import Addbutton from "../../components/back-button/Back-button";
import { Thanhtoanpham, Themhoadon } from "../../Redux/Medicines/Medicines.slice";
import withAuth from "../../Hoc/witauth";
import Item from "./item/item";


const Thanhtoan =()=>{
    const navigation = useNavigation();
    const {detall,  Setsanpham,Hoadon } = useSelector(state => state.Medicines)
    const dispatch = useDispatch();
    return(
       
            <View style={Styles.containers} >
                <View style={Styles.container}>               
                
                <View >                 
                    <User/>
                </View>
                <View >
                    <FlatList
                           data={Setsanpham}
                           renderItem={({item})  => <Item data1={item}/>}
                           keyExtractor={item => item.id}
                    />
                </View>
                <View style={Styles.phuongthuc}>
                    <Text>
                        Phương thức thanh toán
                    </Text>
                    <TouchableOpacity>
                        <Text style={Styles.Textphuongthuc}>Chọn phương thức thanh toán</Text>
                    </TouchableOpacity>
                </View>          
            </View>     
             {/* khi check nut hien thị thanh toan thanh cong và xóa all thanh mang rỗng */}
            <TouchableOpacity style={Styles.Thanhtoan}
                onPress={()=>{
                  alert("Thanh Toán thành công");
                   
                     dispatch(
                        Themhoadon()
                       
                    );               

                    navigation.popToTop()
                   
                }}
            >
                <Text style={Styles.Textthanhtoan}>Thanh toán</Text>
            </TouchableOpacity>
            <Addbutton 
                onPress={()=>
                navigation.goBack()
            }/>  
            </View>
    
    );
}
export default withAuth( Thanhtoan);