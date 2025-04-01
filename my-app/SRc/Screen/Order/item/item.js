import { Text, View } from "react-native";
import styles from "./item.styles";


const Item = ({data}) =>{    
  
    let Tongtien =0;
    for (let i=0; i< data.Sanpham.length; i++) {
        Tongtien += data.Sanpham[i].Soluong * Number(data.Sanpham[i].Gia);
    }
    return(
         <View style={styles.container}>
          
                <Text styles={styles.texttime}>
                                Ngày đặt hàng:{data.ngaygio.day}/{data.ngaygio.month}/{data.ngaygio.year}
                            </Text>
                            <Text style={styles.text}>
                                Tổng tiền:: {Tongtien} 000 VND
                            </Text> 
       
        </View>
    )
}

export default Item;