import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/Home';
import ScreenA from './screens/ScreenA';
import ScreenD from './screens/ScreenD';
import ScreenE from './screens/ScreenE';
import ScreenF from './screens/ScreenF';
import SignIn from './screens/SignIn';
import SignOut from './screens/SignOut';
import ScreenC from './screens/ScreenC';
import ScreenB from './screens/ScreenB';
import Help from './screens/Help';
import Invite from './screens/Invite';
import Profile from './screens/Profile';
import styles from './screens/styles';
const sign = true



function ChatStack (){
  return(
    <Tab.Navigator screenOptions={{
      headerShown:false,
tabBarStyle:{
 ...styles.tab
  
},
headerTintColor: '#fff',
headerTitleStyle: {
  fontWeight: 'bold',
},
    }}>
      <Tab.Screen name ="profile" component = {ScreenC}/>
       <Tab.Screen name ="StackHome" component = {ScreenD}/>
    </Tab.Navigator>
  )
}

function HomeTab(){
  return(
    <Tab.Navigator screenOptions={{
      header:()=>false,
      tabBarStyle:{
        backgroundColor:"#6a51ae",
        marginTop:50
      },
      
    }}>
           <Tab.Screen name ="StackHome" component = {Home}  options={{headerShown:true}}/>
      {/* <Tab.Screen name= "Home" component={MainStack}/> */}
      <Tab.Screen name ="ScreenA" component={ScreenA}/>
      <Tab.Screen name ="ScreenB" component={ScreenB}/>
    </Tab.Navigator>
  )
}


function HomeStack() {
  return (
   <Stack.Navigator>
     {!sign ?
     (
<Stack.Group screenOptions={{
  title:"Sign IN",
  headerShown:false
// headerStyle:{
//   backgroundColor:"blue"
// }
  }}
  
  >
<Stack.Screen name ="SignIn" component = {SignIn}/>
<Stack.Screen name ="SignOut" component = {SignOut}/>
</Stack.Group>
     ):
     (
<Stack.Group screenOptions={{
  
 
  }}
 
  >
<Stack.Screen name ="Home" component = {HomeTab} options={{headerShown:false}}/>
<Stack.Screen name ="SignOut" component = {SignOut} options={{headerShown:false}}/>
<Stack.Screen name = "screenB" component={ScreenB}/>
<Stack.Screen name ="SignIn" component = {SignIn} options={{headerShown:false}}/>
</Stack.Group>
     )}

<Stack.Group screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen name="Help" component={Help} />
    <Stack.Screen name="Invite" component={Invite} />
  </Stack.Group>

  <Stack.Group screenOptions={{ }}>
    <Stack.Screen name="Profile" component={Profile} />
    {/* <Stack.Screen name="Invite" component={Invite} /> */}
  </Stack.Group>
  <Stack.Group screenOptions={{headerStyle:{backgroundColor:"gray"} }}>
    <Stack.Screen name="chat" component={ChatStack} options={{
      // headerShown:false,
      title:"Chat me",
      headerLeft:()=>false
    }} />
    {/* <Stack.Screen name="Invite" component={Invite} /> */}
  </Stack.Group>
   </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider style={{flex:1,backgroundColor:"gray"}} >
   <StatusBar barStyle="dark-content"  />
   <NavigationContainer>
<HomeStack/>
   </NavigationContainer>
      {/* <ScreenA/> */}
    </SafeAreaProvider>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
