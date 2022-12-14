import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

export default function InstuctionText({ children, style }) {
  return (
    <View>
      <Text style={[styles.instuctionText, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  instuctionText: {
    fontFamily: 'yanone-sans-bold',
    color: Colors.accent500,
    fontSize: 34,
  },
});
