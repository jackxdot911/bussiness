import RootLayoutNav from "@/navigation/RootLayoutNav";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export {
  ErrorBoundary, // Catch any errors thrown by the Layout component.
} from "expo-router";

const RootLayout = () => {
  const [loaded, error] = useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
  });

  // Handle any font loading errors
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      <RootLayoutNav />
    </SafeAreaView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
