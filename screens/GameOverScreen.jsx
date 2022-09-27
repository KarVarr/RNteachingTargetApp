import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={[styles.image, { transform: [{ scale: 1.1 }] }]}
        />
      </View>
      <Text style={styles.summeryText}>
        Your phone needed <Text style={styles.highLight}>X</Text> rounds to
        guess the number <Text style={styles.highLight}>Y</Text>
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '99%',
    height: '100%',
  },
  summeryText: {
    marginBottom: 24,
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
  },
  highLight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
