import { useNavigation } from '@react-navigation/native'
import React from 'react'
import AppSafeViewScreen from '../../appComponents/components/AppSafeViewScreen'
import AppText from '../../appComponents/components/AppText'

const HelpScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <AppSafeViewScreen>
        <AppText>

        HelpScreen
        </AppText>
        </AppSafeViewScreen>
  )
}

export default HelpScreen