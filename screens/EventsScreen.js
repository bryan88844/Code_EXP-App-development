import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightpink",
      }}
    >
      <Text style={styles.text}>Events!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Sike")}
      >
        <Text style={styles.linkText}> You've won $1MM!!! CLICK HERE!!!</Text>
      </TouchableOpacity>
    </View>
  );
}

function EventsSecondScreen() {
  return <Text>Don't get scammed</Text>;
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Events' component={EventsScreen} />
      <Stack.Screen name="Sike" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 10,
    textDecorationLine: "underline",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
  },
});
