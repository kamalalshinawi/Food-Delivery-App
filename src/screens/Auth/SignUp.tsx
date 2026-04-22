import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>SignUp</Text>
      <Button title='Go to App' onPress={()=> navigation.navigate("MainApp")} />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})