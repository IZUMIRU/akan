import React from "react";
import { Text } from "react-native";
import createAppContainer from "react-navigation"
import createBottomTabNavigator from "react-navigation";
import styles from "./assets/css/styles";
import HomeScreen from "./src/container/Home";
// import MatchesScreen from "./src/containers/Matches";
// import MessagesScreen from "./src/containers/Messages";
// import ProfileScreen from "./src/containers/Profile";
import Icon from "./src/components/Icon";

export default function App() {
  return (
    <HomeScreen />
  );
}
