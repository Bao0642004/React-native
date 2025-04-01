import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text } from "react-native";
import styles from "./tab-item.styles";

const TabItem =({
    selected,
    icon,
    label,
    onPress
}) => (
    <Pressable
        style={styles.container}
        onPress={onPress}
    >
        <Ionicons 
            name={icon}
            size={30}
            color={selected ? '#FF922B': '#ADB5BD'}
        />
        <Text style={[styles.label, selected && styles.selectlable]}>
            {label}
        </Text>
    </Pressable>
);
export default TabItem;