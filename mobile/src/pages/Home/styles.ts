import { StyleSheet } from 'react-native'

import { theme } from '@src/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: theme.fonts.medium,
    color: theme.colors.brand,
  },
})
