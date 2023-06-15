import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { constants } from "../../themes";
import AppText from "./AppText";


const funnyMessages = [
  "Oopsie-doodle! Looks like the data went on vacation and forgot to come back. 🏝️🤷‍♂️",
  "Whoopsie-daisy! The data seems to have taken an unexpected detour. 🛣️😮",
  "Oh no! The data has decided to play hide and seek. Can you find it? 🔍🤔",
  "Houston, we have a problem! The data is MIA. 🚀🌌",
  "Well, this is awkward. The data seems to have ghosted us. 👻😕",
  "No data, no cry. Bob Marley would understand. 🎵🎶",
  "Looks like the data went on a coffee break. ☕️😴",
  "The data has joined a secret society and is refusing to divulge its whereabouts. 🤐🔒",
  "Data? Data? Where art thou, data? 🤷‍♀️🌍",
  "Alert! The data has taken a spontaneous vacation. 🏖️✈️",
];

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [
      shuffledArray[j],
      shuffledArray[i],
    ];
  }
  return shuffledArray;
};

interface Props {
  style?: StyleProp<ViewStyle>;
  title?: string;
}

const AppNoData: React.FC<Props> = ({
  style,
  title
}) => {
  const shuffledMessages = shuffleArray(funnyMessages);

  const displayTitle = title || shuffledMessages[0];
  return (
    <View style={[styles.container, style && style]}>
      <AppText
        numberOfLines={2}
        style={{ textAlign: "center", lineHeight: 24, width: "85%" }}
      >
        {displayTitle}
      </AppText>
    </View>
  );
};

export default AppNoData;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: constants.paddingHorizontalApp,
    paddingVertical: 2,
    width: constants.windowWidth,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    gap: 12,
  },
});
