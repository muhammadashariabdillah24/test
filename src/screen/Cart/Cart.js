import {View, Text, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button';
import cartStyle from '../../styles/Cart/Cart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import _thousandConverter from '../../utils/ThousandConverter';

const Cart = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const getAllDataProduct = async () => {
    const response = await fetch('http://10.0.2.2:3000/products', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .catch(error => console.error(error));

    if (!response) {
      return;
    }

    setData(response);
  };

  useEffect(() => {
    getAllDataProduct();
  }, []);

  const handleMinusQuantity = index => {
    const newData = [...data];

    if (newData[index].qty > 0) {
      // Selama jumlah count masih diatas 0
      // maka bisa dilakukan pengurangan
      newData[index].qty = newData[index].qty - 1;
      setTotal(total - newData[index].price);
    } else {
      // kalo udah 0 dan masih dikurangin juga
      // hapus array value dengan index yang sesuai
      newData.splice(index, 1);
    }

    setData(newData);
  };

  const handlePlusQuantity = (index) => {
    // ambil semua array yang ada di state todos
    const newData = [...data];

    // ambil property count yang ada didalam todos sesuai dengan indexnya
    // lalu nantinya akan ditambahkan 1 , jadi prosesnya seperti ini
    // count = 1 + 1
    newData[index].qty = newData[index].qty + 1;

    // masukan hasil dari penambahan kedalam state todos
    // menggunakan setTodos
    setData(newData);
    setTotal(total + newData[index].price);
  };

  const handleAddItem = () => {
    const addedData = [...data, {
      id: data.length + 1,
      title : "Mie Ayam",
      description: "Mie Ayam",
      stock: 10,
      price: 10000,
      qty: 0,
      image: "https://picsum.photos/200/200"
    }]

    setData(addedData);
  };

  const handleDeleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <View style={cartStyle.styleContainer}>
      <ScrollView>
        {data.map((item, index) => (
          <View style={cartStyle.styleAccomodateItem} key={index}>
            <View style={cartStyle.styleImageItemAndPrice}>
              <Image
                source={{uri: item.image}}
                style={cartStyle.styleImageItem}
              />
              <View style={cartStyle.stylePrice}>
                <Text style={cartStyle.textPrice}>
                  {_thousandConverter(item.price)}
                </Text>
              </View>
            </View>

            <View style={cartStyle.styleAccomodateButtonAction}>
              {/* For minus quantity  */}
              <Button
                styleContainer={[
                  cartStyle.styleContainerButton,
                  {backgroundColor: '#f44134'},
                ]}
                styleButton={cartStyle.styleButton}
                type="icon"
                iconColor={'#fff'}
                iconName={'minus'}
                iconSize={wp('3.5%')}
                onPress={() => handleMinusQuantity(index)}
              />

              <Text style={cartStyle.textQuantity}>{item.qty}</Text>

              {/* For add quantity */}
              <Button
                styleContainer={[
                  cartStyle.styleContainerButton,
                  {backgroundColor: '#4fc2f7'},
                ]}
                styleButton={cartStyle.styleButton}
                type="icon"
                iconColor={'#fff'}
                iconName={'plus'}
                iconSize={wp('3.5%')}
                onPress={() => handlePlusQuantity(index)}
              />

              {/* For Delete Item */}
              <Button
                styleContainer={[
                  cartStyle.styleContainerButton,
                  {backgroundColor: '#f44134', marginLeft: wp('3%')},
                ]}
                styleButton={cartStyle.styleButton}
                type="icon"
                iconColor={'#fff'}
                iconName={'delete'}
                iconSize={wp('3.5%')}
                onPress={() => handleDeleteItem(index)}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={cartStyle.styleAccomodateTotalAddAndCheckout}>
        <View style={cartStyle.styleAccommodateAddItem}>
          <Text style={cartStyle.textAddItem}>Dummy Product</Text>

          {/* For Add Item */}
          <Button
            styleContainer={[
              cartStyle.styleContainerButton,
              {backgroundColor: '#4cb050'},
            ]}
            styleButton={cartStyle.styleButton}
            type="icon"
            iconColor={'#fff'}
            iconName={'plus'}
            iconSize={wp('3.5%')}
            onPress={() => handleAddItem()}
          />
        </View>

        <View style={cartStyle.styleAccomodateCartTotal}>
          <View style={cartStyle.styleCartTotal}>
            <View style={cartStyle.styleCartAndTextQuantity}>
              <Icon name="cart" size={wp('5%')} color="#000" />
              <Text style={cartStyle.styleTextCartTotal}>{data.reduceRight((a, b) => (
                a + b.qty
              ), 0)}</Text>
            </View>
            <Text style={cartStyle.styleTextCartTotalPrice}>
              Total: {_thousandConverter(total)}
            </Text>
          </View>

          <View style={cartStyle.styleAccomodateCheckoutAndClose}>
            {/* For Close */}
            <Button
              styleContainer={[
                cartStyle.styleContainerButton,
                {backgroundColor: '#f44134'},
              ]}
              styleButton={cartStyle.styleButton}
              type="text"
              textButton="Close"
              onPress={() => {}}
            />

            {/* For Checkout */}
            <Button
              styleContainer={[
                cartStyle.styleContainerButton,
                {backgroundColor: '#4fc2f7', width: wp('50%')},
              ]}
              styleButton={cartStyle.styleButton}
              type="text"
              textButton="Go to checkout"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
