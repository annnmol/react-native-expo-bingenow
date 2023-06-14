import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../../appComponents/components/AppButton";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import { colors, typography } from "../../themes";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const AuthScreen = () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<string>("login");
  
  return (
    <AppSafeViewScreen style={styles.pageContainer}>
      <View style={styles.textContainer}>
        <AppText style={styles.pageTitle}>Welcome! </AppText>
        <AppText style={styles.pageCaption}>
          Sign up or Login to your Account{" "}
        </AppText>
      </View>
      <View style={styles.tabContainer}>
        <AppButton
          variant="round"
          onPress={() => setActiveTab("login")}
          style={[
            styles.tabButton,
            activeTab === "login" && styles.activeTabButton,
          ]}
          textStyle={{
            color: activeTab === "login" ? colors.light100 : colors.bgColor,
          }}
        >
          Login
        </AppButton>
        <AppButton
          variant="round"
          onPress={() => setActiveTab("register")}
          style={[
            styles.tabButton,
            activeTab === "register" && styles.activeTabButton,
          ]}
          textStyle={{
            color: activeTab === "register" ? colors.light100 : colors.bgColor,
          }}
        >
          Signup
        </AppButton>
      </View>
      {
        activeTab === "login" ? ( 
          <LoginScreen />
      ) : (

      <RegisterScreen />
      )}
     
    </AppSafeViewScreen>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  pageContainer: {
    gap: 16,
  },
  tabContainer: {
    width: "100%",
    backgroundColor: colors.bgColor100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 40,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  activeTabButton: {
    backgroundColor: colors.bgColor,
    color: colors.light100,
    fontWeight: "300",
  },
  tabButton: {
    width: "48%",
    height:40,
    backgroundColor: "transparent",
    color: "red",
  },
  textContainer: {
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  formContainer: {
    gap: 12,
  },
  pageTitle: { fontSize: typography.textL, fontWeight: "600", lineHeight: 28, color:colors.dark300 },
  pageCaption: { fontSize: typography.textS, lineHeight: 20 , color:colors.dark500},
});
