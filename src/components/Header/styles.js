import { StyleSheet, Platform } from 'react-native';
import { device, responsive } from 'utils';

export default StyleSheet.create({
  icon: {
    height: responsive({ h: 15 }),
    width: responsive({ h: 15 }),
    padding: 15,
  },
  header: {
    backgroundColor: '#ffffff',
    marginTop:
      Platform.OS !== 'ios' ? responsive({ d: responsive({ d: 130 }) }) : 0,
    width: null,
    flexDirection: 'row',
    marginHorizontal: responsive({ d: 0 }),
  },
  headerFoodDetail: {
    marginBottom:
    Platform.OS !== 'ios' ? responsive({ d: responsive({ d: 20 }) }) : 0,
  },
  title: {
    fontSize: responsive({ f: 17 }),
  },
  bigTitle: {
    fontSize: responsive({ f: 14 }),
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  logo: {
    resizeMode: 'contain',
    width: responsive({ h: 40 }),
    maxHeight: device.height / 20,
  },
  rightText: {
    fontSize: responsive({ f: 17 }),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    paddingHorizontal: responsive({ h: 10 }),
  },
  noPadding: { paddingHorizontal: 0 },
  logoVisible: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
