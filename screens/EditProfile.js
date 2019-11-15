import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Switch,
  TextInput,
  BackHandler,
  TouchableHighlight,
} from 'react-native';

import Header from '../components/Header';

import styles from '../styles/EditProfileStyle';

export default class extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    toggleGoogle: false,
    fullname: 'Kún Park',
    toggleFacebook: false,
    email: 'Pikakun19@gmail.com',
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.props.navigation.goBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.props.navigation.goBack);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          iconLeft={require('../assets/images/icon_back.png')}
          onPressLeft={() => this.props.navigation.goBack()}
          title="Edit Profile"
          rightText="Save"
        />
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableHighlight style={styles.imageContainer2}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg',
              }}
            />
          </TouchableHighlight>
        </View>

        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Text style={{ color: 'blue', fontSize: 15 }}>
            Change image profile
          </Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 14 }}>
            Your full name
          </Text>
          <TextInput
            underlineColorAndroid="transparent"
            multiline={false}
            placeholder="Enter your name"
            style={styles.text}
            onChangeText={text => this.setState({ fullname: text })}
            value={this.state.fullname}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 14 }}>
            Your email address
          </Text>
          <TextInput
            underlineColorAndroid="transparent"
            multiline={false}
            placeholder="Enter your email"
            style={styles.text}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 19, color: '#999' }}>
            Link Account
          </Text>
        </View>

        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 12 }}
              resizeMode="center"
              source={require('../assets/images/ic_facebook.png')}
            />
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              marginLeft: 30,
              flex: 4,
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Facebook
            </Text>
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 20,
              flex: 5,
            }}
          >
            <Switch
              onValueChange={value => this.setState({ toggleFacebook: value })}
              value={this.state.toggleFacebook}
              thumbColor="white"
              trackColor="#45db5e"
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 20 }}
              resizeMode="center"
              source={require('../assets/images/ic_google.png')}
            />
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              marginLeft: 30,
              flex: 4,
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Google
            </Text>
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 20,
              flex: 5,
            }}
          >
            <Switch
              onValueChange={value => this.setState({ toggleGoogle: value })}
              value={this.state.toggleGoogle}
              thumbColor="white"
              trackColor="#45db5e"
            />
          </View>
        </View>
      </View>
    );
  }
}
