import { Pressable } from "react-native";

export default function ButtonSave({ children, handlePress }) {
  return <Pressable onPress={handlePress}>{children}</Pressable>;
}
