import React, { Component,} from 'react';
import {Label, Container, Header, Content, Form, Item, Input, Button, Left, Textarea} from 'native-base';
import {Text, Icon, Dimensions, Image, View, StatusBar} from 'react-native'
import {Block} from 'galio-framework'
import { StyleSheet, Alert } from 'react-native'
import * as firebase from 'firebase'
import Firebasekeys from './config'
import 'firebase/firestore';
const textColor = '#fff'
const themecolor = '#3BC400'
if (!firebase.apps.length) {
  firebase.initializeApp(Firebasekeys);
}

export default class FormExample extends Component {
  state = {
    name: '',
    title: '',
    date: '',
    efforts: '',
    title: '',
    phonenumber: '',
    emailaddress: '',
    supplies: ''
  };

  submissionHandler = async uri => {
        firebase.firestore()
        .collection('Collaboration Postings')
        .add({
            name: this.state.name,
            title: this.state.title,
            date: this.state.date,
            efforts: this.state.efforts,
            title: this.state.title,
            phonenumber: this.state.phonenumber,
            emailaddress: this.state.emailaddress,
            supplies: this.state.supplies,
            description: this.state.description
        })
    setTimeout(() => {
        this.props.navigation.goBack()
    })
  }
  onChangeName = (text) => {
    this.setState({
      name: text,
    })
  }

  onChangeTitle = (text) => {
    this.setState({
      title: text,
    })
  }

  onChangeEfforts= (text) => {
    this.setState({
      efforts: text,
    })
  }

  onChangeDescription = (text) => {
    this.setState({
      description: text,
    })
  }

  onChangeSupplies = (text) => {
    this.setState({
      cost: text,
    })
  }

  onChangeDate = (text) => {
    this.setState({
      date: text,
    })
  }

  onChangePhoneNumber = (text) => {
    this.setState({
      phonenumber: text,
    })
  }

  onChangeEmailAddress = (text) => {
    this.setState({
      emailaddress: text,
    })
  }
  render() {
    return (
      <Container>
        <Content>
            <StatusBar barStyle="light-content"/>
          <Form>
            
            <Item stackedLabel>
              <Label>Name</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeName}/>
            </Item>
            <Item stackedLabel>
              <Label>Title</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTitle}/>
            </Item>
            <Item stackedLabel>
              <Label>Efforts Involved</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeEfforts}/>
            </Item>
            <Content padder stackedLabel>
              <Form>
                <Textarea rowSpan={3} placeholder="Description" style={FormStyles.formInput} onChangeText={this.onChangeDescription} />
                <Item></Item>
              </Form>
            </Content>
            <Item stackedLabel>
              <Label>Supplies</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeSupplies}/>
            </Item>
            <Item stackedLabel>
              <Label>Date</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeDate}/>
            </Item>
            <Item stackedLabel>
              <Label>Phone Number</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangePhoneNumber}/>
            </Item>
            <Item stackedLabel>
              <Label>Email Address</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeEmailAddress}/>
            </Item>
            <Button style={{backgroundColor: `${themecolor}`, alignSelf: "stretch", flex: 1}} onPress={this.submissionHandler}>
              <Text style={{color: `${textColor}`, textAlign: 'center', paddingLeft: 200}}>Submit</Text>
              </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const FormStyles = StyleSheet.create({
  formInput: {
    padding: 10,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    color: '#000'
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  }})