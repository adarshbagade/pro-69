import React from 'react';
import {Image,Text,View} from 'react-native';
import ig from '../assets/download.jpg';

export default class InstagramScreen extends React.Component{
  render(){
      return(
          <View>
            <Image source={ig} style={{ width: 305, height: 159 }}>

</Image>
          <Text>Welcome To InstaGram!!</Text>
          </View>
      )
  }
      
  


}