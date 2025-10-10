import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Keyboard, Pressable, StyleSheet, Text } from 'react-native';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../constants/Colors';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login } = useUser();

  const handleSubmit = async () => {
    setError(null);
    try {
        await login(email, password);
        setEmail('');
        setPassword('');
        
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Pressable style={{ flex: 1 }}  onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText isTitle={true} style={styles.title}>Login to your account</ThemedText>

        <ThemedTextInput 
          placeholder='Email' 
          style={{ width: '80%', marginBottom: 20}}
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />
        <ThemedTextInput 
          placeholder='Password' 
          style={{ width: '80%', marginBottom: 20}}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{color: "#f2f2f2", fontWeight: "bold"}}>Login</Text>
        </ThemedButton>

        <Spacer />
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
      </ThemedView>
    </Pressable>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
});
