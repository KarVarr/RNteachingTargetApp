import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItme}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
listItme: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .25,
    shadowRadius: 3,
    elevation: 4,
},
itemText: {
    fontFamily: 'open-sans'
}
})