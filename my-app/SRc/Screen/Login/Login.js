import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Login.styles";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { loginthunk } from "../../Redux/auth/Auth.thunk";

const Dangnhap = () => {
     const navigation = useNavigation();
    const dispatch = useDispatch();
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>
            <TextInput
                placeholder="username"
                style={styles.InPut}
                onChangeText={(text) => {
                 setusername(text);
                }}
            />
              <TextInput
              secureTextEntry
                placeholder="password"
                style={styles.InPut}
                onChangeText={(text) => {
                    setpassword(text);
                }}
            />
             <TouchableOpacity  style={styles.savebutton} 
                onPress={async()=>{   
                            
                    if(username === '' && password === ''){                      
                        alert("Chưa nhập tài khoản và mật khẩu");
                    } 
                    else{
                        try{
                          await  dispatch(
                                loginthunk(
                                    {
                                        username: username,
                                        password: password,
                                    }
                                )
                            ).unwrap();    
                        }catch(error){
                            alert('sai rooi');
                            
                       }                     
                    }
                }}
             >
                <Text  style={styles.savebuttonText}> Dăng nhập </Text>
            </TouchableOpacity>
                
            <View style={styles.containaer2}> 
                <Text style={styles.Text1}>
                    Chưa có tài khoản, đăng ký tại đây
                </Text>
                <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate('Dangki')
                    }}
                >
                    <Text style={styles.text2}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
           
        </ScrollView>
    );
};


export default Dangnhap;