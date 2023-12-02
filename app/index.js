// screens/index.js
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import ScrollManager from "../components/ScrollManager";


export default HomeScreen = () => {
 
  const [scrollY, setScrollY] = useState(0); // New state for scroll offset
  const [headerColor, setHeaderColor] = useState("dynamic"); // Initialize with "dynamic"

  const [headerTitle, setHeaderTitle] = useState("Initial Title");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={headerTitle} scrollY={scrollY} headerColor={headerColor} />
      <ScrollManager setHeaderTitle={setHeaderTitle} setScrollY={setScrollY} />
    </SafeAreaView>
  );
};
 