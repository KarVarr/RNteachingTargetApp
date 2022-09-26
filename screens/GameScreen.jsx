import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import { LinearGradient } from 'expo-linear-gradient';

export default function GameScreen() {
  return (
    <LinearGradient colors={['#c0c0aa', '#1cefff']} style={styles.rootScreen}>
      <View style={styles.screen}>
        <Title children="Opponent's Guest" />
        <View>
          <Text>Higher or lower</Text>

          <View></View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 16,
  },
  rootScreen: {
    flex: 1,
  },
});
