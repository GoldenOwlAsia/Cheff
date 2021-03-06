import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles from 'styles/theme';

export default StyleSheet.create({
  container: {
    // borderBottomColor: '#dddd',
    // borderBottomWidth: 1,
  },
  title: {
    marginBottom: responsive({ d: 10 }),
    color: 'black',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
  },
  errorText: {
    color: 'red',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_SMALL }),
    marginTop: responsive({ d: 10 }),
  },
  dropdown: {
    borderBottomWidth: 0,
  },
  items: {
    height: responsive({ h: 150 }),
  },
});
