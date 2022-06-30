//https://www.youtube.com/watch?v=l8nY4Alk70Q
//https://github.com/luceroweb/react-native-custom-drawer  to add header
import "react-native-gesture-handler";
import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppStack />
        {/* <AuthStack /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    PaddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
