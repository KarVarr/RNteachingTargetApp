import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const back = {
  uri: 'https://www.transparenttextures.com/patterns/cartographer.png',
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'yanone-sans': require('./assets/fonts/YanoneKaffeesatz-Regular.ttf'),
    'yanone-sans-bold': require('./assets/fonts/YanoneKaffeesatz-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numbewrOfRounds) {
    setGameIsOver(true);
    setGuessRound(numbewrOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRound(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRound}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={['#c0c0aa', '#1cefff']} style={styles.rootScreen}>
      <ImageBackground
        source={back}
        resizeMode='repeat'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.45,
  },
});
