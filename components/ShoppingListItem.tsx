import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "../theme";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  name: string;
};

export default function ShoppingListItem({ name }: Props) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting"),
          style: "destructive",
        },
        { text: "Cancel", onPress: () => console.log("Cancel") },
      ],
    );
  };

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
        onPress={() => setIsCompleted((prev) => !prev)}
      >
        {name}
      </Text>
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
        <Ionicons
          name="close-circle"
          size={32}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorCerulean,
  },
  button: { backgroundColor: theme.colorBlack, padding: 8, borderRadius: 6 },
  completedButton: { backgroundColor: theme.colorGrey },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  itemText: { fontSize: 18, fontWeight: 300 },
  completedText: {
    textDecorationColor: theme.colorGrey,
    textDecorationLine: "line-through",
    color: theme.colorGrey,
  },
});
