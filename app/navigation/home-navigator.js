import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Bag, Tag, Profile } from "../screens";
import CustomTab from "../components/custom-tab/custom-tab";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="bag" component={Bag} />
      <Tab.Screen name="tag" component={Tag} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
