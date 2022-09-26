import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/colors';

export default function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'slateblue',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'slateblue',
    borderRadius: 29,
    padding: 12,
  },
});