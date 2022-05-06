import { StatusBar } from 'react-native'

import AppLoading from 'expo-app-loading'
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'

import { Home } from '@pages/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Home />
    </>
  )
}
