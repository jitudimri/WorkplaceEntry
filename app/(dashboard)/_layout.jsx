import { Stack, useRouter } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from '../../constants/Colors';
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";
import { useUser } from "../../hooks/useUser";

const DashboardLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    const { user } = useUser();
    const router = useRouter();

  return (
    <UserOnly>
        <StatusBar style="auto"/>
        <Stack screenOptions={{ 
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        
    }}>
        <Stack.Screen
            name="session"
            options={{
                headerTitle: user?.email || "Session",
                headerLeft: () => (
                    <Ionicons 
                        name="home" 
                        size={30} 
                        color={Colors.white} 
                        style={{ marginLeft: 15 }} 
                        onPress={() => router.replace('/')} 
                    />
                ),
            }}
        />
    </Stack>
    </UserOnly>
  );
}

export default DashboardLayout;
