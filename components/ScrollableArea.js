// ScrollableArea.js
import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default ScrollableArea = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.section1Title}>Good Morning, James</Text>
      <View style={styles.notificationCard}>
        <View style={styles.notificationCardLeft}>
          <Text style={styles.notificationTextLeft}>
            You have no new notifications.
          </Text>
          <View style={styles.notificationCardRight}>
            <Text style={styles.notificationTextRight}>
              Open Read Notiffications
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.section2Title}>Latest Measurements</Text>
      {/* Here we map over an array to create multiple cards */}
      {Array.from({ length: 2 }, (_, i) => (
        <View style={styles.measurementCard} key={`measurement-${i}`}>
          <Text style={styles.measurementText}>Measurement {i + 1}</Text>
          {/* Additional details for each measurement can go here */}
        </View>
      ))}
      <Text style={styles.section2Title}>Leaderboard</Text>
      {/* Here we map over an array to create multiple cards */}
      {Array.from({ length: 2 }, (_, i) => (
        <View style={styles.measurementCard} key={`measurement-${i}`}>
          <Text style={styles.measurementText}>Leaderboard {i + 1}</Text>
          {/* Additional details for each measurement can go here */}
        </View>
      ))}
      <Text style={styles.section2Title}>Trends</Text>
      {/* Here we map over an array to create multiple cards */}
      {Array.from({ length: 10 }, (_, i) => (
        <View style={styles.measurementCard} key={`measurement-${i}`}>
          <Text style={styles.measurementText}>Trends {i + 1}</Text>
          {/* Additional details for each measurement can go here */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    // Add a border
    borderWidth: 1, // Add a solid border
    borderColor: "#d3d3d3", // Set the color of the border to grey
    // Add shadow or elevation
    //elevation: 3,
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowRadius: 6,
    //shadowOpacity: 0.3,
  },
  notificationCardLeft: {
    flexDirection: "column",
    // Additional styling can be applied here
  },
  notificationCardRight: {
    flexDirection: "row",
    // Additional styling can be applied here
  },
  notificationTextLeft: {
    fontSize: 15,
    fontWeight: "500",
    // Additional styling can be applied here
  },
  notificationTextRight: {
    fontSize: 13,
    fontWeight: "400",
    // Additional styling can be applied here
  },
  notificationButton: {
    backgroundColor: "#ffffff",
    width: 40,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  section1Title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    // Additional styling can be applied here
  },
  section2Title: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    // Additional styling can be applied here
  },
  measurementCard: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 10,
    // Add shadow or elevation
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },
  measurementText: {
    fontSize: 16,
    // Additional styling can be applied here
  },
  // Add any other styles you might need
});
