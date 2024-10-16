import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Explore = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.MainText}>Explore</Text>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
    MainText: { fontSize: 40, fontFamily: 'outfit-bold' },
    MainContainer: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }
})