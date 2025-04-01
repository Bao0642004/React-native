import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import styles from "./Register.styles";

const Dangki = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Đăng kí</Text>
            <TextInput
                placeholder="Họ tên"
                style={styles.InPut}
                onChangeText={(text) => {
               
                }}
            />
             <TextInput
              secureTextEntry
                placeholder="Gmail"
                style={styles.InPut}                
            />
              <TextInput
              secureTextEntry
                placeholder="Mật khẩu"
                style={styles.InPut}
                onChangeText={(text) => {
                  
                }}
            />
             <TouchableOpacity  style={styles.savebutton}   
                   onPress={()=>
                    navigation.goBack()
                }
             >
                <Text  style={styles.savebuttonText}> Dăng ký </Text>
            </TouchableOpacity>
          
           
        </ScrollView>
    );
};


export default Dangki;