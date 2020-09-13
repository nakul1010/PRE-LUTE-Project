import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {View} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useLinking } from '@react-navigation/native';

export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://breathepa.org/wp-content/uploads/2015/06/air-pollution.jpg' }} />
              </Left>
              <Body>
                <Text>Sign Our Petiton To Protect Air Quality</Text>
                <Text note numberOfLines={3}>"State of the Air" 2020 found that nearly half of Americans lived in counties that had unhealthy ozone or particle pollution.

The science is clear: the nation needs stronger limits on ozone and particle pollution to safeguard health. Every family has the right to breathe healthy air – and the right to know when air pollution levels are unhealthy.

Tell the Environmental Protection Agency to follow the science and set stronger limits on dangerous air pollution.</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>American Lung Association</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.stateoftheair.org/join-our-fight.html')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/4/fm/sz/CufMsZagjkeMGvW-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>Ban Gas Powered Leaf Blowers in Menlo Park, Ca</Text>
                <Text note numberOfLines={3}>Recently there have been a large number of complaints regarding the use of Gasoline Powered Leaf Blowers (GPLBs) in our City. Since people are home much more often these days due to the pandemic, there is no escaping them. People have begun to awaken to the harm they cause, especially in comparison to the benefits they provide. In fact, more than 30 California cities have already banned their use. Menlo Park should be next.</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/donald-j-trump-end-the-tax-on-necessary-menstrual-products-in-the-us?source_location=topic_page')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/1/kr/pn/pEkRPnVXhGoGTLk-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>Protect Oak Ridge’s Neighborhoods and Natural Assets from Noise/Environmental Pollution</Text>
                <Text note numberOfLines={3}>We are fortunate in the city of Oak Ridge to have many livable neighborhoods and natural assets. The proposal to build a motor sports park and amphitheater at the Horizon Center will turn many neighborhoods and natural assets into noisy and stressful environments whenever races or concerts are held. The proposal states that these events can draw hundreds of drivers and their family members. The track will be suitable for many racing events including Indy Car, a race event not known for its peace and quiet.  The open air amphitheater is expected to hold concerts for 7000+ people! Sounds of concerts and motorways are known to travel for as many as ten miles, yet the nearest neighborhood is less than one mile away. This proposal will have a significant negative impact on the livability of our neighborhoods and likely reduce our property values and pollute the natural assets.</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/donald-j-trump-end-the-tax-on-necessary-menstrual-products-in-the-us?source_location=topic_page')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/0/xj/yk/MSxjyKjoQmELNCM-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>Reduce fossil fuel emissions in the Port of Miami</Text>
                <Text note numberOfLines={3}>Cruises are known as fun ways to relax and get to see the world – but what if that fun is coming at the expense of our health and the planet?
A recent report found that one cruise ship produces the same amount of emissions as 1 million cars. Now consider the pollution in major cruise ship ports like Miami, where I live.
Sign my petition asking the Port of Miami to require cruise ships take measures to reduce their emissions.
</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/black-lives-matter-activists-justice-for-tony-mcdade')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/5/qe/cb/nKqecbKFIwYFnGQ-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>Reduce Ocean Pollution</Text>
                <Text note numberOfLines={3}> Every day, there is 1.5 million pounds of plastic admitted into the ocean, caused by littering, overuse of plastic products and carelessness in general towards the environment. According to OceanSociety.Org, between 4 and 12 million metric tons of plastic enter the ocean each year—enough to cover every foot of coastline on the planet. In the ocean, plastic pollution impacts sea turtles, whales, seabirds, fish, coral reefs, and countless other marine species and habitats. In fact, scientists estimate that more than half of the world’s sea turtles and nearl</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/ocean-cleanup-reduce-ocean-pollution')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            
          </List>
        </Content>
      </Container>
    );
  }
}