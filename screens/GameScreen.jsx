import { View, Text, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstuctionText from '../components/ui/InstuctionText';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <LinearGradient colors={['#c0c0aa', '#1cefff']} style={styles.rootScreen}>
      <View style={styles.screen}>
        <Title children="Opponent's Guest" />
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstuctionText style={styles.instuctionText}>
            Higher or lower
          </InstuctionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.rootScreen}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <AntDesign name='minuscircleo' size={24} color='cyan' />
              </PrimaryButton>
            </View>
            <View style={styles.rootScreen}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <AntDesign name='pluscircleo' size={24} color='cyan' />
              </PrimaryButton>
            </View>
          </View>
          <View></View>
        </Card>
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
  instuctionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
