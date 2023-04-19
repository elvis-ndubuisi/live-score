import { View, Image, StyleSheet } from "react-native";

import { COLORS } from "../constants/theme";

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <View style={styles.sport}>
          <Image style={styles.sportImage} source={{}} />
          <Text style={styles.sportText}>football</Text>
        </View>
        <Text style={styles.heading}>
          liverpool UEFA Champion league celeration
        </Text>
        <Text>Yesterday, 08:30PM</Text>
      </View>

      <View style={styles.showcase}>
        <Image style={styles.showcaseImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 161,
    width: "100%",
    maxWidth: 319,
    borderRadius: 16,
    position: "relative",
    padding: 18,
  },
  description: {
    gap: 8,
    justifyContent: "space-between",
  },
  sport: {
    flexDirection: "row",
    gap: 3,
    backgroundColor: COLORS.white,
    borderRadius: "100%",
  },
  sportText: {
    fontWeight: "600",
    fontSize: 12,
    textTransform: "capitalize",
  },
  sportImage: {
    width: 12,
    height: 12,
  },
  heading: {
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: 600,
  },
  schedule: {
    fontSize: 12,
    fontWeight: 400,
    textTransform: "capitalize",
  },
  showcase: {},
  showcaseImage: {},
});
