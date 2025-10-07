
import { Text, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedText = ({style, isTitle = false, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

  return (
    <Text style={[{ color: isTitle ? theme.title : theme.text }, style]} {...props}/>
  );
}

export default ThemedText;
