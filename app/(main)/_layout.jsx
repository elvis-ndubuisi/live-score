import { Link, Tabs, useNavigation } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{}} />
      <Tabs.Screen name="profile" options={{}} />
      <Tabs.Screen name="standings" options={{}} />
    </Tabs>
  );
}
