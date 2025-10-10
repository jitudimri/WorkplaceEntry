
import NetInfo from '@react-native-community/netinfo';
import { createContext, useEffect, useState } from "react";

export const WifiContext = createContext();

export const WifiProvider = ({ children }) => {
    const [wifiIp, setWifiIp] = useState('');

    async function getWifiInfo() {
        try {
            const state = await NetInfo.fetch();
            if (state.type === 'wifi' && state.isConnected) {
                setWifiIp('122.138.0.100');// setWifiIp(state.details.ipAddress || '');
            } else {
                setWifiIp('');
            }
        } catch (error) {
            console.error("Failed to get WiFi info:", error);
            setWifiIp('');
        }
    }

    useEffect(() => {
        getWifiInfo();
    }, [wifiIp]);

    return (
        <WifiContext.Provider value={{ wifiIp }}>
            {children}
        </WifiContext.Provider>
    );
};