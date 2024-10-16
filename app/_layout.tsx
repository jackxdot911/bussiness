import RootLayoutNav from "@/navigation/RootLayoutNav";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native"; // Import Lottie

export {
  ErrorBoundary, // Catch any errors thrown by the Layout component.
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
  });

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded && isAnimationComplete) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isAnimationComplete]);

  if (!loaded || !isAnimationComplete) {
    return (
      <View style={style.splashContainer}>
        <LottieView
          key="splashAnimation"
          source={require("./../assets/lottie/splash-screen.json")}
          autoPlay
          loop={false}
          onAnimationFinish={() => setIsAnimationComplete(true)}
          style={style.lottie}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <RootLayoutNav />
    </SafeAreaView>
  );
};

export default RootLayout;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Add a background color (white)
  },
  lottie: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
  },
});
