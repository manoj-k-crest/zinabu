import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { AllCategories } from "../../../constants";
import { Colors } from "../../../styles/colors";

export default function Categories({ selectedTab, onPressTab }) {
  const TabButton: FC<{
    title: AllCategories;
    isSelected: boolean;
    onPress: any;
  }> = ({ title, isSelected, onPress }) => {
    return (
      <TouchableOpacity
        style={[
          {
            borderColor: isSelected ? "white" : Colors.marketPlacePrimary,
            borderBottomWidth: isSelected ? 5 : 1,
          },
        ]}
        onPress={() => onPress(title)}
      >
        <Text
          style={[
            {
              color: isSelected ? "white" : "black",
            },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        height: 35,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: Colors.marketPlacePrimary,
        paddingBottom: 8,
      }}
    >
      {Object.values(AllCategories).map((tab) => (
        <TabButton
          key={tab}
          title={tab}
          isSelected={selectedTab == tab}
          onPress={onPressTab}
        />
      ))}
    </View>
  );
}
