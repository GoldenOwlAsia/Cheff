import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

import theme from 'styles/theme';
import { responsive } from 'utils';
import styles from './styles';

const CustomSwitch = ({
  title,
  selectedItems,
  items,
  onSelectedItemsChange,
  uniqueKey,
  displayKey,
  containerStyle,
  error,
}) => (
  <View>
    <View style={[styles.container, containerStyle]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <MultiSelect
        hideTags
        items={items}
        uniqueKey={uniqueKey}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Select items..."
        searchInputPlaceholderText="Search ..."
        displayKey={displayKey}
        fontSize={responsive({ f: theme.FONT_SIZE_NORMAL })}
        styleDropdownMenuSubsection={styles.dropdown}
        styleItemsContainer={styles.items}
        flatListProps={{ nestedScrollEnabled: true }}
      />
    </View>
    {!!error && <Text style={styles.errorText}>{error}</Text> }
  </View>
);

export default CustomSwitch;
