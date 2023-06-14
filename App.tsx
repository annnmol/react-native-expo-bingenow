import "react-native-gesture-handler";
import RootNavigator from "./app/navigation/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
