import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";

import { COLORS } from "../constants/theme";

export default function Root() {
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Image />
      </View>

      <View style={styles.child}>
        <Text style={styles.discover}>Discover all about sport</Text>
        <View>
          <Text style={styles.note}>
            Search millions of jobs and get the inside scoop on companies.
          </Text>
          <Text style={styles.note}>Wait for what? Let's get started.</Text>
        </View>
        <View>
          <Link href="/home" style={styles.note}>
            Button
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darker,
    padding: 30,
  },
  child: {
    flex: 1,
  },
  discover: {
    color: COLORS.white,
    fontWeight: 700,
    fontSize: 42,
    marginBottom: 16,
  },
  note: {
    color: COLORS.greyDark,
    fontWeight: 400,
    fontSize: 16,
    paddingVertical: 5,
  },
});
