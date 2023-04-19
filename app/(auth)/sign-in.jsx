import { View, Text } from "react-native";

export default function Signin() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {/* {!isPresented && <Link href="../">Dismiss</Link>} */}
      <Text>signin page</Text>
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
    </View>
  );
}
