import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = () => {
  const setAsyncData = async (keyName: string, value: object) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(keyName, jsonValue);
    } catch (error: any) {
      console.log("AsyncStorage Data store error", error);
    }
  };

  const getAsyncData = async (keyName: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(keyName);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error: any) {
      console.log("AsyncStorage reading Data store error", error);
    }
  };
  const removeAsyncData = async (keyName: string) => {
    try {
      await AsyncStorage.removeItem(keyName);
    } catch (error: any) {
      console.log("AsyncStorage reading Data store error", error);
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage clear succrss");
    } catch (error: any) {
      console.log("AsyncStorage clearAll error", error);
    }

    console.log("Done.");
  };

  return { clearAll, getAsyncData, setAsyncData, removeAsyncData };
};

export default useAsyncStorage;
