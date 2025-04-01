import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

import styles from "./Order.styles";
import Item from "./item/item";

const Order = ()=>{
     const { Hoadon } = useSelector(state => state.Medicines)
  
   return(
   
       
          <FlatList
            data={Hoadon}
            renderItem={({item}) => <Item data={item} />}
            keyExtractor={item => item.id}
          />
        
     
  
   );
}

export default Order;