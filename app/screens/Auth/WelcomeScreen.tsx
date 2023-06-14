import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  View
} from "react-native";
import AppButton from "../../appComponents/components/AppButton";
import AppSafeViewScreen from "../../appComponents/components/AppSafeViewScreen";
import AppText from "../../appComponents/components/AppText";
import { ROUTES_NAMES } from "../../navigation/Routes";
import { colors, constants } from "../../themes";

interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const WelcomeScreen: React.FC<Props> = ({ style, children, ...otherProps }) => {
  const navigation = useNavigation<any>();
  return (
    <AppSafeViewScreen style={[styles.wrapper]}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.1)", "transparent", "rgba(0,0,0,0.5)"]}
        style={styles.backgroundGradient}
      />
      <View style={[styles.imageView]}>
        {/* <RadialCircle width={480} height={480} /> */}
        <Image
          style={[styles.image]}
          source={require("../../assets/images/welcomeIcon.png")}
          resizeMode="cover"
        />
      </View>
      <View style={[styles.buttonContainer]}>
        <AppText style={[styles.tagLine]}>
          Streamline your job hunt with our intuitive mobile app
        </AppText>
        <AppText style={[styles.subTitle]}>
        Discover, apply, and track job opportunities seamlessly with our user-friendly mobile app, designed to simplify your job hunt and land your dream career.
        </AppText>
        <AppButton
          // variant="outline"
          style={{ marginBottom: 12 }}
          onPress={() => navigation.navigate(ROUTES_NAMES.SIGNUP)}
        >
          Start Browsing
        </AppButton>
      </View>
    </AppSafeViewScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: colors.bgColor900,
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
  },
  imageView: {
    width: constants.windowWidth,
    height: "55%",
    overflow: "hidden",
    position: "absolute",
    zIndex: 1,
    top: 0,
  },

  image: {
    position: "absolute",
    left: "15%",
    bottom: "-15%",
    width: "70%",
    height: 450,
    resizeMode: "center",
  },

  tagLine: {
    fontSize: 24,
    letterSpacing: 1,
    lineHeight: 32,
    textAlign: "center",
    color: colors.light500,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    lineHeight:20,
    letterSpacing: 1,
    textAlign: "center",
    color: colors.light100,
    fontWeight: "600",
    marginBottom: 32,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: constants.paddingHorizontalApp,
    paddingBottom: constants.paddingVerticalApp + 6,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: constants.paddingHorizontalApp,
    paddingBottom: constants.paddingVerticalApp + 16,
    justifyContent: "space-between",
    alignItems: "center",
    height:'40%',
  },
  backgroundGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: "-57%",
    zIndex: 1,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  LogoCaption: {
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: "bold",
    color: colors.dark300,
  },
});

{
  /* <ImageBackground
style={[styles.background]}
source={require("../../assets/images/egg.jpeg")}
blurRadius={1}
>
<StatusBar barStyle="light-content"  />
 <LinearGradient
  // Background Linear Gradient
  colors={['rgba(0,0,0,0.9)', 'transparent']}
  style={styles.backgroundGradient}

/>
<View style={[styles.logoContainer]}>
  <Image
    style={[styles.logoImage]}
    source={require("../../assets/images/icon.png")}
  />
  <AppText style={styles.LogoCaption}>Get Healthy food in 15mins</AppText>
</View>
<View style={[styles.buttonContainer]}>
  <AppButton variant="round"  style={{marginBottom:12}} onPress={() => navigation.navigate(ROUTES_NAMES.LOGIN)}>
    Login
  </AppButton>
  <AppButton variant="round" onPress={() => navigation.navigate(ROUTES_NAMES.SIGNUP)}>
    Register
  </AppButton>
</View>
</ImageBackground> */
}
