import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: unknown) => {
  await AsyncStorage.setItem(key, JSON.stringify(value))
}

export const getData = async <T>(key: string): Promise<T> => {
  const value = await AsyncStorage.getItem(key)

  return value ? JSON.parse(value) : null
}
