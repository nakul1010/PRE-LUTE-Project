import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Title, CardItem, Item, Input } from 'native-base';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import * as WebBrowser from 'expo-web-browser'
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import { useLinking } from '@react-navigation/native';
const themecolor = '#fff'
 
const screenWidth = Dimensions.get('window').width
const tabcolor = '#3BC400'
export default class Learning extends Component {

   constructor(props){
       super(props);
       this.state = {
           location: null,
           datetime: null,
           aqi: null, 
           category: null,
           dominant_pollutant: null,
       }
   }
   componentDidMount(){
       this._getLocationAsync()
   }
   _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    
    if(status === 'granted'){
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location});
        console.log(location.coords)
        this.requestAPI()
        console.log(this.state.aqi)
    }
    else{
      Alert.alert('Location services has not been enabled. Please go to the Settings and enable it.')
    }
  }
   requestAPI = () => {
    fetch(`https://api.breezometer.com/air-quality/v2/current-conditions?lat=${this.state.location.coords.latitude}&lon=${this.state.location.coords.longitude}&key=8d69f59b396740af97c6ace202996808`).then((response) => response.text())
    .then((res) => {
        console.log(res);
        this.setState({aqi: res})
    })
    }

  render() {
    if(this.state.aqi === null){
        return(<View></View>)
    }
    return (
      <Container>
        <Content>
        <View style={styles.container}>
            <StatusBar/>
    <Text style={{fontSize: 16, paddingLeft: 10, marginBottom: 5}}>Showing Results as of {this.state.aqi.aqi}</Text>
            <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 140,
            }}
            />
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Air Quality Index</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/>
                    <Text></Text>
        <Text style={{fontSize: 24, color: `${themecolor}`}}>{this.state.aqi}</Text>
                </View>
            </View>
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Level of Severness:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="hospital-box" size={24} color={themecolor} style={{paddingRight: 5}} />
                    <Text></Text>
                    <Text style={{fontSize: 24, color: `${themecolor}`}}>{this.state.aqi}</Text>
                </View>
            </View>
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Most Dominant Pollutant:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="chart-areaspline" size={24} color="#fff" style={{paddingRight: 5}}/>
                    <Text></Text>
                    <Text style={{fontSize: 24, color: '#fff'}}>{this.state.aqi}</Text>
                </View>
            </View>
            <View style={{margin: 8, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, width: (screenWidth-64/2), backgroundColor: `${tabcolor}`}}>
                <Text style={{color: `${themecolor}`}}>Other IDEAL Drivers on the Road:</Text>
                <Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/>
                    <Text></Text>
                    <Text style={{fontSize: 24, color: `${themecolor}`}}>0</Text>
                </View>
            </View>
            
        </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      padding: 15,
    },
});