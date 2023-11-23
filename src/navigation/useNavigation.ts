import {
  NavigationProp,
  useNavigation as useReactNavigation,
} from '@react-navigation/native'
import { useEffect } from 'react'

import { RootParamList } from '../types/types'
import { getData } from '../utils/asyncStorage'

function useNavigation() {
  const navigation = useReactNavigation<NavigationProp<RootParamList>>()

  useEffect(() => {
    async function fetchUser() {
      const userName = await getData('userName')

      if (!userName) {
        navigation.navigate('SignIn')
      }
    }

    fetchUser()
  }, [])
}

export default useNavigation
