import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailsPage from './DetailsPage';
import DisplayScreen from './DisplayScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <DetailsPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e3fc',
  
  },
});
