import { StyleSheet, Text } from 'react-native';

import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import { useUser } from '../../hooks/useUser';
import ThemedButton from '../../components/ThemedButton';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';
import { useWifi } from '../../hooks/useWifi';
import { validateWifi } from '../../lib/validateWifi';
import { useRouter } from 'expo-router';

const Profile = () => {
  const { logout, user } = useUser();
  const [error, setError] = useState(null);
  const { wifiIp } = useWifi();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const resp = await validateWifi(wifiIp);
      if (!resp) {
        setError("You are not connected to the workplace WiFi");
        return;
      }
      setError(null);
      router.push('/session');
    } catch (error) {
      setError(error.message);
    }
  }

  const handleLogout = async () => {
    setError(null);
    try {
        await logout();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <ThemedView style={styles.container}>
      
      <ThemedButton onPress={handleLogout} style={styles.logoutBtn}>
        <Text style={{ color: Colors.white}}>Logout</Text>
      </ThemedButton>
      <Spacer height={'30%'}/>

      <ThemedText title={true} style={styles.heading}>
        {user && user.email}
      </ThemedText>
      <Spacer/>
      
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: Colors.white}}>Enter Workplace</Text>
      </ThemedButton>
      <Spacer/>

      <Spacer />
      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
      
    </ThemedView>
  );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
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
    logoutBtn: {
        backgroundColor: Colors.warning,
        alignSelf: 'flex-end',
    },
});
