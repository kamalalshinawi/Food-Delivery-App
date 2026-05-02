import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckoutCard from '../../components/CheckoutCard'
import { SharedPaddingHorizontal } from '../../styles/SharedStyle'

const cart = () => {
  return (
    <View style={styles.container}>
     <CheckoutCard image={require('../../assets/images/banner1.png')}
     title='ProductName'
     price='22'
      count={1}
     />
    </View>
  )
}

export default cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:SharedPaddingHorizontal,
  }
})