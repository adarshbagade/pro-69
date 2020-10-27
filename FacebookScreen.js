import React from 'react';
import {Image,Text,View} from 'react-native';
import fb from '../assets/fb.png';

export default class FacebookScreen extends React.Component{
  render(){
      return(
        <View>

          <Image source={fb} style={{ width: 305, height: 159 }}>

          </Image>
          <Text>Welcome To FaceBook!!</Text>

         </View>
      )
  }
      
  


}