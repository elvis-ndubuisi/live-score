import React from "react";
import { SplashScreen, Slot, Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import { Provider } from "../context/auth";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  /* Load custom fonts */
  const [fontsLoaded, error] = useFonts({
    SourceSansProBold: require("../assets/fonts/SourceSansPro-Bold.ttf"),
    SourceSansProSemiBold: require("../assets/fonts/SourceSansPro-SemiBold.ttf"),
    SourceSansProRegular: require("../assets/fonts/SourceSansPro-Regular.ttf"),
    SourceSansProLight: require("../assets/fonts/SourceSansPro-Light.ttf"),
  });

  /* Catch errors in navigation tree. */
  React.useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!fontsLoaded && <SplashScreen />}
      {fontsLoaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="signin"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen
          name="new-tweet"
          options={{ title: "New Tweet", headerShown: false }}
        /> */}
      </Stack>
    </>
  );
}
