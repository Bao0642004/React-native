import Ionicons from '@expo/vector-icons/Ionicons';
import { View,Text } from "react-native";
import Styles from "./User.styles";

const User = ()=>{
    return(
      
            <View style={Styles.container}>
               <View style={Styles.View}>
                    <Ionicons name="person" size={15} color="black" />
                    <Text style={Styles.Text1}>Tên</Text>
               </View>
                <View style={Styles.View}>
                    <Ionicons name="pin-outline" size={15} color="black" />
                    <Text style={Styles.Text2}>ĐỊa chỉ:</Text>
                </View>
                <View style={Styles.View}>
                  <Ionicons name="location-outline" size={15} color="black" />
                  <Text style={Styles.Text2}>
                            Dia chi
                  </Text>
                </View>
            </View>
    );
}
export default User;