import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Header from '../../components/Header';
import ListPlanItem from './components/ListPlanItem';

import styles from '../../styles/ListPlanStyle';

const mockData = [
  {
    id: '1',
    time: '5:00 AM',
    title: 'Let have breakfast',
    description: 'Tiểu nhị! Cho tô phở tái',
    type: 'breakfast',
  },
  {
    id: '2',
    time: '10:30 AM',
    title: 'Brunch with dog',
    description: 'Mang đây 1 pizza ko hành ko giá',
    type: 'brunch',
  },
  {
    id: '3',
    time: '1:30 PM',
    title: 'Lunch love',
    description: 'Bò xào cần tây ft rau ngót hầm xương',
    type: 'lunch',
  },
  {
    id: '4',
    time: '7:50 PM',
    title: 'Ready for dinner',
    description: 'Nhẹ nhàng chào buổi tối bằng nồi lẩu hải sản <3',
    type: 'dinner',
  },
];

export default withNavigation(({ navigation }) => {
  const renderHeader = () => (
    <Header
      onPressLeft={navigation.goBack}
      iconLeft={require('../../assets/images/icon_back.png')}
    />
  );

  const renderDayTime = () => (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 50,
        marginLeft: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      }}
    >
      <Text style={{ marginTop: 15, color: 'black', fontSize: 24 }}>
          01 August, 2018
      </Text>
      <Text
        style={{
          color: '#666',
          fontSize: 18,
          marginTop: 20,
          marginRight: 15,
        }}
      >
          Today
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDayTime()}
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListPlanItem {...item} />}
      />
    </View>
  );
});
