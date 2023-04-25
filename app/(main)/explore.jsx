import { View, Text, ScrollView } from "react-native";

import Search from "../../components/Search";

export default function Explore() {
  return (
    <View>
      <View>
        <Search />
        <Text>heading</Text>
      </View>
      <ScrollView>
        <Text>explore screen</Text>
      </ScrollView>
    </View>
  );
}
