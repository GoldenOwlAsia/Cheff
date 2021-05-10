import React, { Component } from 'react';
import {
  Animated, StyleSheet, Text, View, I18nManager,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default class SwipeableRow extends Component {
  renderRightAction = (text, func, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      if (func) {
        func();
      }
      this.close();
    };
    return (
      <Animated.View key={text} style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}
        >
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = progress => {
    const { listAction } = this.props;
    return (
      <View style={{ width: 192, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
        {
          listAction.map(({
            text, action, color, x,
          }) => this.renderRightAction(text, action, color, x, progress))
        }
      </View>
    );
  };


  updateRef = ref => {
    this._swipeableRow = ref;
  };

  close = () => {
    this._swipeableRow.close();
  };

  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderRightActions={this.renderRightActions}
      >
        {children}
      </Swipeable>
    );
  }
}
