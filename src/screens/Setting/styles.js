import { StyleSheet } from 'react-native';
import { device, responsive } from 'utils';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  iconBack: {
    height: responsive({ h: 20 }),
    width: responsive({ h: 20 }),
    marginLeft: responsive({ d: 10 }),
  },
  preferences: {
    height: device.height / 10,
  },
  textSetting: {
    color: '#000000',
    fontSize: responsive({ f: 22 }),
    flex: 1,
    marginLeft: responsive({ d: 20 }),
    justifyContent: 'center',
  },
  textPreferences: {
    color: '#bababa',
    fontSize: responsive({ f: 16 }),
    marginLeft: responsive({ d: 20 }),
    marginTop: responsive({ d: 5 }),
    flex: 1,
    alignItems: 'flex-start',
  },
  underLine: {
    height: 1,
    backgroundColor: '#d1d1d1',
    marginTop: responsive({ d: 20 }),
    marginBottom: responsive({ d: 20 }),
  },
  accountView: {
    height: device.height / 20,
  },
  accountText: {
    color: '#000000',
    fontSize: responsive({ f: 17 }),
    marginTop: responsive({ d: 20 }),
    marginLeft: responsive({ d: 20 }),
  },
  content: {
    height: device.height / 7,
    marginLeft: responsive({ d: 20 }),
    marginRight: responsive({ d: 20 }),
    justifyContent: 'space-around',
  },
  commonText: {
    textAlignVertical: 'center',
    fontSize: responsive({ f: 17 }),
    color: '#5E5E5E',
    paddingLeft: responsive({ d: 10 }),
  },
  centerFlex1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  otherText: {
    color: '#000000',
    fontSize: responsive({ f: 17 }),
    marginLeft: responsive({ d: 20 }),
  },
  subContent: {
    height: device.height / 4.5,
    marginLeft: responsive({ d: 20 }),
    marginRight: responsive({ d: 20 }),
    justifyContent: 'space-around',
  },
  centerViewFlex8: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});