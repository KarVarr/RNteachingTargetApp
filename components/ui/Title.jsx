import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'slateblue',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'slateblue',
    borderRadius: 29,
    padding: 12,
  },
});