import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "../../constants/theme";
import { Image } from "react-native";

export function MatchCard() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        rowGap: 27,
        borderRadius: 16,
        backgroundColor: COLORS.dark,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          position: "relative",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.darker,
            borderRadius: "100%",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
          }}
        >
          <Image style={{ width: 22, height: 22 }} />
        </View>
        <View
          style={{
            backgroundColor: COLORS.darker,
            borderRadius: "100%",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
          }}
        >
          <Image style={{ width: 22, height: 22 }} />
        </View>
      </View>

      <View
        style={{
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: FONT_WEIGHT.semibold,
            fontSize: 14,
          }}
        >
          Aston Villar vs Liverpool
        </Text>

        <View>
          <Text>2 - 3</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: COLORS.darker,
        }}
      >
        <Text
          style={{
            fontWeight: FONT_WEIGHT.semibold,
            fontSize: 14,
          }}
        >
          FT
        </Text>
      </View>
    </View>
  );
}

export function ClubCard() {
  return (
    <View style={{ backgroundColor: COLORS.darker, borderRadius: "100%" }}>
      <View style={{ width: 60, height: 60 }}>
        <Image style={{ width: 36, height: 36 }} />
      </View>
      <Text style={{ textAlign: "center" }}>clube name</Text>
    </View>
  );
}

export function LaligaCard() {
  return (
    <View
      style={{
        height: 112,
        width: 112,
        borderRadius: "100%",
        backgroundColor: COLORS.darker,
      }}
    >
      <Image style={{ height: 75, width: 75 }} />
    </View>
  );
}

export function FieldFootball() {
  return (
    <View style={{ height: 363, width: "100%" }}>
      <Image style={{ height: "100%", width: "100%" }} />
    </View>
  );
}

export function ArticleCard() {
  return (
    <View>
      <Text>Arsernal vs sdaiofj</Text>
      <Text>date</Text>
    </View>
  );
}
