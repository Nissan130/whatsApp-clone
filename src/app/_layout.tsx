import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hideAsync();
    },2000)
  },[isLogin]);

  return (
   <>
   <Stack screenOptions={{headerShown:false}} />
      {
        isLogin ? <Redirect href={'/(main)'}/> : <Redirect href={"/(auth)"} />
      }
   </>
  )
}

export default RootNavigation