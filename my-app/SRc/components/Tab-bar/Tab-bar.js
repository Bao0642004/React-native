import { View } from 'react-native';
import styles from './Tab-bar.styles';
import TabItem from './tab-item/tab-item';

const TabBar = ({
  state,
  descriptors,
  navigation,
}) => (
  <View style={styles.container}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      
      const { tabBarLabel, title } = options;
      let label;

      if (tabBarLabel !== undefined) {
        label = tabBarLabel;
      } else if (title !== undefined) {
        label = title;
      } else {
        label = route.name;
      }

      const selected = state.index === index;
      const onPress = () => {
        if (selected === false) {
          navigation.navigate({ name: route.name, merge: true });
        }
      }
      
      return (
        <TabItem
          key={route.key}
          selected={selected}
          icon={options.icon}
          label={label}
          onPress={onPress}
        />
      );
    })}
  </View>
);

export default TabBar;