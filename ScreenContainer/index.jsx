import React from 'react'
import { View } from 'react-native'
import style from './style'

function ScreenContainer({children}) {
  return (
    <View style={style.screenContainer}>
      {children}
    </View>
  )
}

export default ScreenContainer