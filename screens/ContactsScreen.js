import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function ContactsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen'}}>
        <Text style={styles.text}>Contacts!</Text>
      </View>
    );
  }

const Stack = createStackNavigator();

export default function ContactsStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Contacts" component={ContactsScreen}/>
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  text: { 
      fontSize: 40,
      fontWeight: "bold"
  },
  });  