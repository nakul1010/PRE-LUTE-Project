import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator, StatusBar, Dimensions, Image, ScrollView, TextInput} from 'react-native'
import {IconButton} from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'
const textColor = '#fff'
const themeColor = '#2777E1'

export default class ToolsNavigationScreen extends React.Component{
    render(){
        return(
        <View style={styles.welcomer}><StatusBar barStyle="light-content"/>
            
            <View style={styles.search}> 
            <TextInput
                 placeholder="Enter a question or fact check"
                 placeholderTextColor="#D3D3D3"
                 autoCapitalize="none"
                 style={{flex: 1, padding: 0}}
             /> 
             <IconButton
             icon="check"
             color= '#2777E1'
             size={20}
             onPress={() => 
               this.props.navigation.push('Results')}
             />
          </View>
                <View style={{paddingTop: 100}}></View>
            <View style={{flexDirection: 'row',}}>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Math Tools')}>
                    <Text></Text>
                    <Text style={styles.title}>Math</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('English Tools')} >
                    <Text style={styles.title}>English</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Spanish Tools')} >
                    <Text style={styles.title}>Spanish</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Biology Tools')} >
                    <Text style={styles.title}>Biology</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Chemistry Tools')} >
                    <Text style={styles.title}>Chem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Physics Tools')} >
                    <Text style={styles.title}>Physics</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('Social Studies Tools')} >
                    <Text style={styles.title}>Social Studies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolBox} onPress={() => 
                this.props.navigation.navigate('French Tools')} >
                    <Text style={styles.title}>French</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    welcomer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center'
    },

    image: {
        width: 40,
        height: 40,
    },
    toolBox: {
        alignItems: "center",
        width: (175),
        margin: 8,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 24,
        shadowRadius: 10,
        backgroundColor: `${themeColor}`,
        shadowOpacity: 0.1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 18, color: `${textColor}`, fontWeight: "600", paddingLeft:10
    },
    search: {
        flex: 1,
        position:'absolute', 
        top: 0,
        marginTop: Platform.OS === 'ios' ? 40 : 20, 
        flexDirection:"row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf:'center',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        borderColor: '#000'
      },
})