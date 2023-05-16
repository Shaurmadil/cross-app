import {Text, View} from 'react-native';
import React from 'react';

const Header = ({labNum}) => {
  return (
    <View
      style={{        
        backgroundColor: 'blue',
        // paddingTop: insets.top,
        alignItems: 'center'
      }}>
      <Text style={{
        fontSize: 20
      }}>Виконав лабораторну роботу №{labNum}</Text>
      <Text style={{
        fontSize: 20,
        paddingBottom: 5
      }}>Студент групи кн-32 Ярмола М.О.</Text>
    </View>
  );
};

export default Header;