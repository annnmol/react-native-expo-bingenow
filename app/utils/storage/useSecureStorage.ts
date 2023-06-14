import * as SecureStorage from "expo-secure-store";

const keyName = "authToken";

const useSecureStorage = () => {
  const setSecureData = async (value: string) => {
    try {
      await SecureStorage.setItemAsync(keyName, value);
    } catch (error: any) {
      console.log("SecureStorage Data store error", error);
    }
  };

  const getSecureData = async () => {
    try {
      return await SecureStorage.getItemAsync(keyName);
    } catch (error: any) {
      console.log("SecureStorage reading Data store error", error);
    }
  };
  const removeSecureData = async () => {
    try {
      await SecureStorage.deleteItemAsync(keyName);
    } catch (error: any) {
      console.log("SecureStorage reading Data store error", error);
    }
  };

  return { getSecureData, setSecureData, removeSecureData };
};

export default useSecureStorage;
