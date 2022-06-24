import { Alert, SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function Account() {
  return (
    <SafeAreaView>
      <Text></Text>
      <Text>User: Alex</Text>
      <Text></Text>
      <Text>Email: 281212.namaste@gmail.com </Text>
      <Text></Text>
      <Text>Account: Premium</Text>
      <Text></Text>
      {/* <TouchableWithoutFeedback onPress={()=>Alert.alert("QUE NO PRESIONES JODER!!!")} title="No Presiones"  /> */}
    </SafeAreaView>
  )
}