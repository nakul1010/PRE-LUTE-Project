import * as React from 'react';
import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons, Entypo, MaterialCommunityIcons, Octicons, FontAwesome5} from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import SafetyScreen from './screens/SafetyScreen'
import AddPostFormScreen from './screens/AddPostForm'
import ForecastsScreen from './screens/ForecastsScreen'
import HeatMapsScreen from './screens/TPHeatMapScreen'
import MLScreen from './screens/MLScreen'
import { StyleSheet, Text, View } from 'react-native';
import {IconButton} from 'react-native-paper'

const textColor = '#fff'
const themeColor = '#3BC400'
const BottomTabs = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ForecastsStack = createStackNavigator()
const SafetyStack = createStackNavigator()
const MLStack = createStackNavigator()

function HomeSection({navigation}) {
  return (
    <HomeStack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${themeColor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${textColor}`
      },
    }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          headerTitle: "Home Feed",
          headerRight: () => <IconButton
          icon="account-multiple-plus"
          color={textColor}
          size={24}
          animated={true}
          onPress={() =>  navigation.navigate('Add a Post')}
        />
        }}
      />
      <HomeStack.Screen name="Add a Post" component={AddPostFormScreen}
        options={{
          headerTitle: "Add a Post",
        }}
      />
    </HomeStack.Navigator>
  );
}

function ForecastsSection() {
  return (
    <ForecastsStack.Navigator initialRouteName="Forecasts"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${themeColor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${textColor}`
      },
    }}
    >
      <ForecastsStack.Screen name="Forecasts" component={ForecastsScreen}
        options={{
          headerTitle: "Forecasts",
        }}
      />
    </ForecastsStack.Navigator>
  );
}

function SafetySection() {
  return (
    <SafetyStack.Navigator initialRouteName="Safety"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${themeColor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${textColor}`
      },
    }}
    >
      <SafetyStack.Screen name="Safety" component={SafetyScreen}
        options={{
          headerTitle: "How to Stay Safe in Polluted Area",
        }}
      />
    </SafetyStack.Navigator>
  );
}
function MLSection() {
  return (
    <MLStack.Navigator initialRouteName="ML Algo"
    screenOptions={{
      headerStyle: {
        backgroundColor: `${themeColor}`,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: `${textColor}`
      },
    }}
    >
      <MLStack.Screen name="ML Algo" component={MLScreen}
        options={{
          headerTitle: "ML Algo",
        }}
      />
    </MLStack.Navigator>
  );
}
export default function App() {
    return (
      <NavigationContainer>
      <BottomTabs.Navigator
      initialRouteName="Feed"
      sceneAnimationEnabled="true"
      activeColor={textColor}
      inactiveColor={textColor}
      barStyle={{ backgroundColor: `${themeColor}` }}
    >
      <BottomTabs.Screen name="Home" component={HomeSection} 
      options={{
        tabBarIcon: ({color}) => (
          <Entypo name="home" size={24} color={textColor} />
        ),
      }}
      />

      <BottomTabs.Screen name="Forecasts" component={ForecastsSection} 
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="air-filter" size={24} color={textColor}/>
        ),
        headerTitle: "Forecasts",
      }}
      />
      <BottomTabs.Screen name="Safety" component={SafetySection} 
      options={{
        tabBarIcon: ({color}) => (
          <Entypo name="warning" size={26} color={textColor} />
        ),
      }}
      />
      <BottomTabs.Screen name="ML" component={MLSection} 
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="robot" size={26} color={textColor} />
        ),
      }}
      />
    </BottomTabs.Navigator>
    </NavigationContainer>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
