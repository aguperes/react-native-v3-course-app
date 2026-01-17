import { Link, Stack } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => (
            <Link asChild href="/counter/history">
              <Pressable hitSlop={20}>
                <MaterialCommunityIcons
                  name="history"
                  size={32}
                  color="black"
                />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
