import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert} from 'react-native';

export default class Info extends React.Component{
    constructor(props){
        super(props)
     this.state={
         weather:""
     }
    }
    componentDidMount(){
    this.getWeather()
    }
     getWeather=async()=>{
    const response1=  await fetch("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139")
    const response2= await response1.json()
    console.log(response2)
           this.setState({
              weather: response2
          })
    }

    render(){
        if(this.state.weather === ""){
            return(
            <Text>Fetching Image...</Text>
           )
        }else{
            console.log(this.state.weather.main)
            return(
                <View>
                    <Text>{this.state.weather.main.coord}</Text>
                    <Text>{this.state.weather.main.name}</Text>
                    <Text>{this.state.weather.main.humidity}</Text>
                    <Text>{this.state.weather.main.temp}</Text>
                </View>
           )
        }
      
    }
}