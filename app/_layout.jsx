
import { Stack } from 'expo-router';
import { UserProvider } from '../contexts/UserContext';
import { WifiProvider } from '../contexts/WifiContext';

const RootLayout = () => {

  return (
    <WifiProvider>
        <UserProvider>
            <Stack screenOptions={{ 
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
                <Stack.Screen
                    name="(auth)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(dashboard)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="index"
                    options={{
                        headerTitle: 'Workplace',
                    }}
                />
            </Stack>
        </UserProvider>
    </WifiProvider>
  );
}

export default RootLayout;
