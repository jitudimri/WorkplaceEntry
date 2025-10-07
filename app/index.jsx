import { Image, StyleSheet, Text } from 'react-native';
import Logo from '../assets/xlogo.jpg';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import { Colors } from '../constants/Colors';
import { useUser } from '../hooks/useUser';
import { useState } from 'react';
import { useWifi } from '../hooks/useWifi';
import { validateWifi } from '../lib/validateWifi';
import { useRouter } from 'expo-router';
import ThemedButton from '../components/ThemedButton';

const Home = () => {
    const { logout, user } = useUser();
    const [error, setError] = useState(null);
    const { wifiIp } = useWifi();
    const router = useRouter();

    const btnText = user ? "Logout" : "Login";

    const handleLogin = async () => {
        setError(null);
        try {
            if (!user) {
                router.replace('/login');
                return;
            }
            await logout();
        } catch (error) {
            setError(error.message);
        }
    }

    const handleWorkplace = async () => {
        try {
          const resp = await validateWifi(wifiIp);
          if (!resp) {
            setError("Not connected to the valid workplace WiFi");
            return;
          }
          setError(null);
          router.replace('/session');
        } catch (error) {
          setError(error.message);
        }
    }

  return (
    <ThemedView style={styles.container}>
      <Spacer height={10}/>
      <ThemedButton onPress={handleLogin} style={user ? styles.logoutBtn : styles.loginBtn}>
        <Text style={styles.textLoginBtn}>{btnText}</Text>
      </ThemedButton>
      <Spacer height={'20%'}/>
      
      <Image source={Logo}  style={styles.img}/>
      <Spacer/>

      <ThemedButton onPress={handleWorkplace}>
        <Text style={styles.textWorkspaceBtn}>Enter Workplace</Text>
      </ThemedButton>
      <Spacer/>

      <ThemedText style={styles.error}>Connected to wifi - {wifiIp}</ThemedText>

      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
    </ThemedView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    marginVertical: 10,
    width: 120,
    height: 120,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  logoutBtn: {
    backgroundColor: Colors.warning,
    alignSelf: 'flex-end',
    width: 100,
    padding: 10,
  },
  loginBtn: {
    backgroundColor: Colors.primary,
    alignSelf: 'flex-end',
    width: 100,
  },
  textLoginBtn: {
    color: Colors.white, 
    fontSize: 20,
  },
  textWorkspaceBtn: {
    color: Colors.white, 
    fontSize: 23,
  },
});
