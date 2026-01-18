import { useState } from "react";
import { StyleSheet, TextInput, FlatList, View, Text } from "react-native";
import { theme } from "../theme";
import ShoppingListItem from "../components/ShoppingListItem";
import { nanoid } from "nanoid/non-secure";

type ShoppingListItemType = {
  id: string;
  name: string;
};

export default function App() {
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);

  const handleOnSubmit = () => {
    if (value.trim().length === 0) return;

    const newItem = {
      id: nanoid(),
      name: value,
    };
    setShoppingList((prev) => [newItem, ...prev]);
    setValue("");
  };

  return (
    <FlatList
      data={shoppingList}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => <ShoppingListItem name={item.name} />}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your shopping list is empty</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          placeholder="E.g. Coffee"
          style={styles.textInput}
          returnKeyType="done"
          onChangeText={setValue}
          onSubmitEditing={handleOnSubmit}
          value={value}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    borderRadius: 50,
    padding: 12,
    marginBottom: 12,
    fontSize: 18,
    marginHorizontal: 6,
    backgroundColor: theme.colorWhite,
  },
});
