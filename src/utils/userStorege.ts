import { storeData } from './asyncStorage'
import { UserStorageT } from '../types/types'

export async function UserStorage({
  userName,
  accessToken,
  refreshToken,
}: UserStorageT) {
  await storeData('userName', { userName })
  await storeData('accessToken', { accessToken })
  await storeData('refreshToken', { refreshToken })
}
