import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { APIProvider } from "./backend/api-provider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}
export default function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold": require("~/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("~/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("~/assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("~/assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("~/assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("~/assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("~/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });
  // useeffect to hide splash screen
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Provider>
  );
}

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider>
      <ClerkProvider publishableKey={publishableKey}>
        <ClerkLoaded>{children}</ClerkLoaded>
      </ClerkProvider>
    </APIProvider>
  );
}
