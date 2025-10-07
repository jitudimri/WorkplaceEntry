import { useContext } from "react";
import { WifiContext } from "../contexts/WifiContext";

export function useWifi() {
  const context = useContext(WifiContext);
  if (!context) {
    throw new Error("useWifi must be used within a Wifi-Provider");
  }

  return context;
}
