import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';

import {styles} from './styles';
import {FilterPropsTypes} from '../../Header/types';
import ButtonIcon from 'src/component/Button/ButtonIcon';
import {sizes} from 'src/theme/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from 'src/theme';

interface PropsTypes extends FilterPropsTypes {
  refRBSheet;
}

export default function ProductFilter({
  setSearchText,
  searchText,
  refRBSheet,
}: PropsTypes) {
  const {bottom} = useSafeAreaInsets();

  const [maxPrice, setMaxPrice] = useState(searchText.maxPrice);
  const [ratting, setRatting] = useState(searchText.ratting);
  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.children}>
            <ButtonIcon
              iconName="rupee"
              containerStyle={styles.filterButtonContainer}
              iconProps={{type: 'font-awesome', size: sizes.iconSize}}
            />
            <TextInput
              placeholder="Price"
              style={styles.inputContainer}
              value={maxPrice ? maxPrice.toString() : '0'}
              onChangeText={text => setMaxPrice(parseInt(text))}
              keyboardType="numeric"
            />
            <ButtonIcon
              onAction={() => setMaxPrice(0)}
              textStyle={styles.resetText}
              title="Reset"
              iconColor={theme.colors.black}
            />
          </View>
          <View style={styles.children}>
            <ButtonIcon
              textStyle={styles.textStyle}
              iconStyle={styles.iconStyles}
              iconProps={{type: 'font-awesome', size: sizes.iconSize}}
              iconName="star"
            />
            <TextInput
              placeholder="Rating"
              style={styles.inputContainer}
              maxLength={2}
              value={ratting ? ratting.toString() : '0'}
              onChangeText={text => setRatting(parseInt(text))}
              keyboardType="number-pad"
            />
            <ButtonIcon
              onAction={() => setRatting(0)}
              textStyle={styles.resetText}
              title="Reset"
            />
          </View>
        </ScrollView>
      </View>
      <ButtonIcon
        containerStyle={styles.filterButton}
        textStyle={styles.filterText}
        title="Filter"
        onAction={() => {
          setSearchText({...searchText, maxPrice: maxPrice, ratting});
          refRBSheet?.current?.close();
        }}
      />
    </View>
  );
}
