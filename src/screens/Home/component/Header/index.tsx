import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {styles} from './style';
import {theme} from 'src/theme';
import {icons} from 'src/theme/icon';
import {sizes} from 'src/theme/colors';
import DefaultIcon from 'src/component/DefaultIcon';
import ButtonIcon from 'src/component/Button/ButtonIcon';
import {FilterPropsTypes} from './types';

export default function HomeHeader({
  setSearchText,
  searchText,
}: FilterPropsTypes) {
  return (
    <View style={styles.container}>
      <ButtonIcon
        iconName={icons.menu}
        iconProps={{size: sizes.iconSize + 10}}
        iconColor={theme.colors.black}
      />
      <View style={styles.searchContainer}>
        <DefaultIcon iconName="search-outline" size={sizes.iconSize - 5} />
        <TextInput
          placeholder="Search Product"
          style={styles.textInput}
          onChangeText={text => setSearchText({...searchText, name: text})}
          value={searchText.name}
          placeholderTextColor={theme.colors.black}
        />
      </View>
    </View>
  );
}
