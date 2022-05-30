import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import style from './style'
import image from '../../assets/image-20220524-201840.png';

function HomeScreen() {
  return (
    <View style={style.homeContainer}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
        {/* <Text style={style.text}>
          Home Screen
        </Text> */}
      </ImageBackground>
    </View>
  )
}

export default HomeScreen