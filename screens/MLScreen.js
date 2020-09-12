import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

const website = 'https://google.com'

export default class MLTool extends React.Component{
    render(){
        return(
            <WebView source={{ uri: website }}  />
        )
    }
}