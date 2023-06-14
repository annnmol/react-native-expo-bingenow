import { Dispatch, SetStateAction, useMemo, useState } from "react";
import AppText from "../components/AppText";
import { View } from "react-native";

export function usePrettyPrintedState<T extends object>(): [
  JSX.Element,
  Dispatch<SetStateAction<T | undefined>>
] {
  const [value, setValue] = useState<T>();
  const resultValue = useMemo(() => {
    return (
      <View>
        {value && (
          <AppText>
            Values:
            {JSON.stringify(value, null, 2)}
          </AppText>
        )}
      </View>
    );
  }, [value]);
  return [resultValue, setValue];
}

//*  const [value, setValue] = usePrettyPrintedState(); *//
