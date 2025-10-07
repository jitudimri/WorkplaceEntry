import { Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const ActivityButton = ({style, ...props}) => {
  return (
    <Pressable 
        style={[styles.btn, style]}
        {...props}
    >
    </Pressable>
  );
}

export default ActivityButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
});