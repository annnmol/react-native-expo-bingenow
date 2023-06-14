import AsyncStorage from "@react-native-async-storage/async-storage";
// import moment from "moment";

const PREFIX_KEY = "cache";
const EXPIRY_IN_MINUTES = 500;

const useCacheStorage = () => {

  const setCacheData = async (keyName: string, value: object) => {
    try {
      let item = {
        value,
        timeStamps: Date.now(),
      };

      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem(PREFIX_KEY + keyName, jsonValue);
    } catch (error: any) {
      console.log("CacheStorage Data store error", error);
    }
  };

  const getCacheData = async (keyName: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(PREFIX_KEY + keyName);

      if (!jsonValue) return null;

      const item = JSON.parse(jsonValue);

      // let isExpired = checkExpiry(item?.timeStamps);
      let isExpired = false;

      if (isExpired) {
        AsyncStorage.removeItem(PREFIX_KEY + keyName);
      }

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error: any) {
      console.log("CacheStorage reading Data store error", error);
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      console.log("CacheStorage clear succrss");
    } catch (error: any) {
      console.log("CacheStorage clearAll error", error);
    }

    console.log("Done.");
  };

  // const checkExpiry = (timeStamps: string | number | null) => {
  //   const now = moment(Date.now());
  //   const storedTimeStamps = moment(timeStamps);
  //   return now.diff(storedTimeStamps, "minutes") > EXPIRY_IN_MINUTES;
  // };

  return { clearAll, getCacheData, setCacheData };
};

export default useCacheStorage;
