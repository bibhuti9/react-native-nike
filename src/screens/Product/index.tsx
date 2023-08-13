import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';
import {theme} from 'src/theme';
import {store} from '@store/index';
import {icons} from 'src/theme/icon';
import {sizes} from 'src/theme/colors';
import {_Shrink} from 'src/utils/string';
import {pop} from 'src/utils/navigation';
import {Heading} from 'src/component/Heading';
import Seperator from 'src/component/Seperator';
import {ProductStoreType} from '@store/products';
import ButtonIcon from 'src/component/Button/ButtonIcon';
import {addToCart, addToFavorite} from '../Home/controller';

const gap = {marginVertical: 10};
const iconProps = {size: sizes.iconSize + 10, color: theme.colors.white};

const Header = observer(({items}) => {
  const hasFavourite = store.favorites.get(items.id);
  const addToaFav = () => {
    addToFavorite(items);
  };
  return (
    <View style={styles.headerContainer}>
      <ButtonIcon iconName={icons.back} iconProps={iconProps} onAction={pop} />
      <ButtonIcon
        iconProps={{size: sizes.iconSize + 10}}
        onAction={addToaFav}
        iconName={hasFavourite ? 'heart' : 'heart-outline'}
        iconColor={hasFavourite ? theme.colors.error : theme.colors.white}
      />
    </View>
  );
});

const Product = ({items}) => {
  const [selectedImages, setSelectedImages] = useState(items.image);
  const onSelect = image => {
    setSelectedImages(image);
  };
  return (
    <View>
      <Image
        source={{uri: selectedImages}}
        style={styles.lgImage}
        resizeMode="contain"
      />
    </View>
  );
};

function ProductInfo({route}) {
  const {params} = route;
  const items: ProductStoreType = params;
  const isAddToCart = store.carts.get(items.id);
  console.log(items.rating.rate);
  const Rating = () => {
    let stars = '';
    for (let i = 0; i < items.rating.rate; i++) {
      stars += '⭐';
    }
    return stars;
  };

  const addCart = () => {
    addToCart(items);
  };

  return (
    <View style={styles.container}>
      {/* top */}
      <View style={styles.background}></View>
      <View style={{margin: sizes.margin + 10}}>
        <Header items={items} />
        <Product items={items} />
        <View style={styles.productInfoContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.brand}>{_Shrink(items.category, 20)}</Text>
            <Heading type={3} title={`₹${items.price}`} style={styles.price} />
          </View>
          <Heading type={2} title={items.title} style={gap} />
          <Seperator />
          <Heading
            type={2}
            title={_Shrink(items.description, 130)}
            style={gap}
          />
          <Seperator />
          <View style={gap}>
            <Heading type={2} title={'Rating'} style={{marginBottom: 5}} />
            <Heading type={3} title={`${Rating()} (${items.rating.count})`} />
          </View>
        </View>
      </View>

      <ButtonIcon
        title={isAddToCart ? 'ALREADY ADDED' : 'ADD TO CATR'}
        containerStyle={styles.addToCart}
        textStyle={{color: theme.colors.white}}
        onAction={addCart}
      />
    </View>
  );
}
export default observer(ProductInfo);
