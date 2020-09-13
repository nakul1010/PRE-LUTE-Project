import React, { useState, useEffect } from 'react';
import { Image, ScrollView, View, StyleSheet, StatusBar, Linking, FlatList,} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Fontisto, MaterialIcons, Entypo} from "@expo/vector-icons"
import * as firebase from 'firebase'
import Firebasekeys from './config'
import 'firebase/firestore'

let pending = true
if (!firebase.apps.length) {
    firebase.initializeApp(Firebasekeys);
  }
export default function HomeScreen() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
      
    useEffect(() => {
        firebase.firestore()
        .collection('Collaboration Postings')
        .get()
        .then(querySnapshot => {
          const users = []
          if(querySnapshot.size > 0)
          {
           pending = false
          }
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          })
        })
        setUsers(users);
        setLoading(false);
        })
    }, [])
    if (pending) {
      return <View>
      <Text style={{marginTop: 15, color: '#ff0000', fontWeight: 'bold', alignSelf: 'center'}}>No Posts Found</Text>
    </View>;
    }
    return (
        <ScrollView>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View>
                    <StatusBar barStyle="light-content"/>
                <ScrollView>
                <Content>
                    <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                        <Body>
                            <Text style={{marginTop: 20, fontSize: 20,}}>{item.name}</Text>
                            <Text note>{item.date}</Text>
                        </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text>
                            {item.description}
                        </Text>
                        </Body>
                    </CardItem>
                    <Text></Text>
                    <View style={{flexDirection: "row", flex: 0.8}}>
                            <MaterialIcons name="subject" size={14} color="#000" style={{marginLeft: 16}}/>
                            <Text style={{marginLeft: 10, fontSize: 14, color:  "#000", flex: 0.9}}>Efforts Involved: {item.efforts}</Text>
                    </View>
                    <Text></Text>
                    <View style={{flexDirection: "row", flex: 0.8}}>
                            <Entypo name="bucket" size={14} color="#000" style={{marginLeft: 16}}/>
                            <Text style={{marginLeft: 10, fontSize: 14, color:  "#000", flex: 0.9}}>Supplies: {item.supplies}</Text>
                    </View>
                    <CardItem>
                        <Left>
                        <Button transparent textStyle={{color: '#3BC400'}} onPress={() => Linking.openURL('tel:'+`${item.phonenumber}`)}>
                            <Icon style={{color: '#3BC400'}} name="ios-call" />
                            <Text style={{color: '#3BC400'}}>Call</Text>
                        </Button>
                        <Button transparent textStyle={{color: '#3BC400'}} onPress={() => Linking.openURL('sms:'+`${item.phonenumber}`)}>
                            <Icon style={{color: '#3BC400'}} name="ios-notifications" />
                            <Text style={{color: '#3BC400'}}>Text</Text>
                        </Button>
                        <Button transparent textStyle={{color: '#3BC400'}}  onPress={() => Linking.openURL(`mailto:${item.emailaddress}?subject=Tutoring`) }title="Tutoring From SLATE" >
                            <Icon style={{color: '#3BC400'}}name="ios-mail" />
                            <Text style={{color: '#3BC400'}}>Email</Text>
                        </Button>
                        </Left>
                    </CardItem>
                    </Card>
                </Content>
                </ScrollView>
            </View>
                )}
                keyExtractor={item => item.key}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
  
    // ...
  }
  