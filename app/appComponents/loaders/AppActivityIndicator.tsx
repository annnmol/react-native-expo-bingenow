import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../themes";
import AppText from "../components/AppText";

interface Props {
  style?: StyleProp<ViewStyle>;
  showText?: boolean;
}

const funnyTexts = [
  "Loading...",
  "Hold on tight!",
  "Getting things ready...",
  "Tick-tock...",
  "Almost there!",
  "Hocus pocus!",
  "Abracadabra!",
  "Patience is a virtue!",
  "Keep calm and wait!",
  "Expecto patronum!",
];

const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
const AppActivityIndicator: React.FC<Props> = ({ style, showText = true }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === funnyTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const shuffledTexts = shuffleArray(funnyTexts);

  return (
    <View style={[styles.container, style && style]}>
      <ActivityIndicator size="large" color={colors.dark600} />
      {showText ? (
        <AppText style={[styles.funnyText]}>
          {shuffledTexts[currentTextIndex]}
        </AppText>
      ) : null}
    </View>
  );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    // backgroundColor: "#ece2e2",
    backgroundColor: "transparent",
  },

  funnyText: {
    // fontFamily: "PoppinsMedium",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0.5,
    color: colors.dark600,
  },
});
