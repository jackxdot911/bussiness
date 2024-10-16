import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.MainText}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    MainText: { fontSize: 40, fontFamily: 'outfit-bold' },
    MainContainer: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }
})