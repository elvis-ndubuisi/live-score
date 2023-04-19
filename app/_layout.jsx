import React from "react";
import { SplashScreen, Slot } from "expo-router";
import { useFonts } from "expo-font";

// SplashScreen.preventAutoHideAsync(); /* Prevents the splash screen from auto-hiding */

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SourceSansProBold: require("../assets/fonts/SourceSansPro-Bold.ttf"),
    SourceSansProSemiBold: require("../assets/fonts/SourceSansPro-SemiBold.ttf"),
    SourceSansProRegular: require("../assets/fonts/SourceSansPro-Regular.ttf"),
    SourceSansProLight: require("../assets/fonts/SourceSansPro-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return <Slot />;
}
