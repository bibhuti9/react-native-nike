import React from 'react';
import {observer} from 'mobx-react';
import {View, TouchableOpacity, Image} from 'react-native';

import {theme} from 'src/theme';
import {styles} from './styles';
import {store} from '@store/index';
import {sizes} from 'src/theme/colors';
import {_Shrink} from 'src/utils/string';
import {push} from 'src/utils/navigation';
import {Heading} from 'src/component/Heading';
import {ProductStoreType} from '@store/products';
import ButtonIcon from 'src/component/Button/ButtonIcon';
import {addToFavorite} from 'src/screens/Home/controller';

function RenderProduct({item}) {
  const items: ProductStoreType = item;
  const isAddToCart = store.carts.get(items.id);
  const onPress = () => {
    push({screenName: 'productInfo', params: items});
  };

  const addToaFav = () => {
    addToFavorite(items);
  };
  const hasFavourite = store.favorites.get(items.id);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ButtonIcon
        onAction={addToaFav}
        iconName={hasFavourite ? 'heart' : 'heart-outline'}
        containerStyle={styles.fav}
        iconColor={hasFavourite ? theme.colors.error : theme.colors.black}
      />
      <View style={{marginVertical: sizes.margin}}>
        <Image source={{uri: items.image}} style={styles.image} />
        <View>
          <Heading type={2} title={_Shrink(items.category, 15)} />
          <Heading
            type={4}
            title={_Shrink(items.description, 40)}
            style={styles.desc}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Heading type={3} title={`₹${items.price}`} />
            {isAddToCart && (
              <Heading type={4} title={` ( ${isAddToCart.count} )`} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default observer(RenderProduct);
