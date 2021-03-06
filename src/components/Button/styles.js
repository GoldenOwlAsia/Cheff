import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles from 'styles/theme';

export default StyleSheet.create({
  button: {
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: responsive({ d: 15 }),
    justifyContent: 'center',

  },
  text: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
  },
});
