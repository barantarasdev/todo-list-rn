import { StyleSheet } from 'react-native'

import { STATUS_BAR_HEIGHT } from '../constants/styles'

export const CONTAINER_PADDING = 10

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CONTAINER_PADDING,
    paddingTop: STATUS_BAR_HEIGHT + CONTAINER_PADDING * 2,
  },
  scrollView: {
    flexGrow: 1,
  },
})
