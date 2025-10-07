const allowedIps = [
  {
    ip: "192.168.0.100",
    tenant: "redco_mumbai_prod",
  },
  {
    ip: "192.168.0.101",
    tenant: "redco_mumbai_prod",
  },
];

export const validateWifi = async (wifiIp) => {
  // Example validation: actual check to happen via calling a backend API
  return allowedIps.find((item) => item.ip === wifiIp);
};
