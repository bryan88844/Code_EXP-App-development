import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
        <Text style={styles.text}>Home!</Text>
      </View>
    );
  }

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  text: { 
      fontSize: 40,
      fontWeight: "bold"
  },
  });  
  