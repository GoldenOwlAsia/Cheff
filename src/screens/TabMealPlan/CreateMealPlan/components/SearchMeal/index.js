import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import lodash from 'lodash';
import { useSelector } from 'react-redux';

import SearchViewCheff from 'components/SearchViewCheff';
import SearchItem from './Item';
import styles from './styles';

const SearchMeal = ({ onCompleted, listSelected = [] }) => {
  const listFood = useSelector(
    ({
      firebase: {
        ordered: { Food },
      },
    }) => Food,
  );

  const [dataSearch, setDataSearch] = useState(listFood);

  const handleSearch = text => {
    if (text.trim() !== '') {
      const data = listFood.filter(
        i => i?.value?.name.toLowerCase().indexOf(text.toLowerCase()) > -1,
      );
      setDataSearch(data);
    } else {
      setDataSearch(listFood);
    }
  };

  const delayedQuery = useCallback(
    lodash.debounce(search => handleSearch(search), 300),
    [JSON.stringify(listFood)],
  );

  const onChangeText = text => {
    delayedQuery(text);
  };

  const addToList = item => {
    let list = [...listSelected];
    if (list.find(listItem => listItem.key === item.key) !== undefined) {
      list = list.filter(listItem => listItem.key !== item.key);
    } else {
      list.push(item);
    }

    onCompleted(list);
  };

  return (
    <View style={{ flex: 1, paddingBottom: 70 }}>
      <View style={styles.searchView}>
        <SearchViewCheff
          autoFocus
          overrideStyle={styles.search}
          onChangeText={onChangeText}
        />
        <FlatList
          data={dataSearch}
          renderItem={({ item }) => (
            <SearchItem
              item={item.value}
              onPressItem={() => addToList(item)}
              isSelected={
                listSelected.find(foodItem => foodItem.key === item.key)
                !== undefined
              }
            />
          )}
          keyExtractor={item => String(item.key)}
        />
      </View>
    </View>
  );
};

export default SearchMeal;
