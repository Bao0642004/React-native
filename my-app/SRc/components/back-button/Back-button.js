
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";
import styles from './Back-button.styles';

const Addbutton =({onPress}) =>(
    <TouchableOpacity   style ={styles.button} onPress={onPress}>     
         <Ionicons name="chevron-back-outline" size={20} color="black" />
  </TouchableOpacity>
);
export default Addbutton;