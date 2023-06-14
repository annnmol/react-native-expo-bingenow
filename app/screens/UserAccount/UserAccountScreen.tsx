import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, ToastAndroid } from "react-native";
import AppButton from "../../appComponents/components/AppButton";
import AppFastImage from "../../appComponents/components/AppFastImage";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import AppExpoIcons from "../../appComponents/icons/AppExpoIcons";
import AppIconButton from "../../appComponents/icons/AppIconButton";
import {
  useFirebaseAuthService,
  useFirebaseDBService,
} from "../../services/firebase";
import { useAppSelector } from "../../store";
import { authUserStore } from "../../store/slices/AuthUserSlice";



const UserAccountScreen = () => {
  const navigation = useNavigation<any>();
  const { logOutUser, updateUserProfile } = useFirebaseAuthService();
  const { getFirebase } = useFirebaseDBService();
  const getNames = () => {
    getFirebase("movies")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.warn("err", err);
      });
  };
  // useEffect(() => {getNames()}, []);

  const { authUser } = useAppSelector(authUserStore);
  const handleLogout = () => {
    logOutUser().finally(() => {
      ToastAndroid.show("User Logged out", ToastAndroid.SHORT);
    });
  };
  const handleProfileUpdate = () => {
    updateUserProfile({
      displayName: "Anmol Tanwar",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  };
  return (
    // <ScrollView>
      <AppSafeViewScreen>
        <AppText>UserAccount Hello {authUser?.email}</AppText>
        <AppIconButton onPress={() => handleLogout()}>
          <AppExpoIcons name="logout" />
        </AppIconButton>
        <AppFastImage source={"https://source.unsplash.com/random/?city"} />

        <AppButton variant="text" onPress={() => handleProfileUpdate()}>
          Update profile name
        </AppButton>
      </AppSafeViewScreen>
    // </ScrollView>  
  );
};

export default UserAccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0.2,
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  details: {
    marginTop: 16,
  },
});
