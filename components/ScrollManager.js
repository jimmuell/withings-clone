// ScrollManager.js
import React from "react";
import { ScrollView } from "react-native";
import ScrollableArea from "./ScrollableArea";

const headerList = [
  0,
  " ",
  1,
  "Home",
  2,
  "Latest Measurements",
  3,
  "Leaderboard",
  4,
  "Trends",
];

const ScrollManager = ({ setHeaderTitle, setScrollY }) => {
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrollY(offsetY); // Pass the offsetY back to the App component
    //console.log("Scroll Y-Offset:", offsetY); // Log the scroll position

    // Define the heights at which the title should change
    const sectionHeights = {
      Home: 1, // Changes to "Home" once scrolling starts
      "Latest Measurements": 145, // Adjust based on layout
      Leaderboard: 335, // Adjust based on layout
      Trends: 525, // Adjust based on layout
    };

    let newTitle = "";
    if (offsetY >= sectionHeights["Trends"]) {
      newTitle = "Trends";
    } else if (offsetY >= sectionHeights["Leaderboard"]) {
      newTitle = "Leaderboard";
    } else if (offsetY >= sectionHeights["Latest Measurements"]) {
      newTitle = "Latest Measurements";
    } else if (offsetY >= sectionHeights["Home"]) {
      newTitle = "Home";
    }

    //console.log("Current Section:", newTitle); // Log the current section title
    setHeaderTitle(newTitle);
  };

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
      <ScrollableArea />
    </ScrollView>
  );
};

export default ScrollManager;
