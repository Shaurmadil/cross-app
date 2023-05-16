import {StyleSheet, Text, View, TextInput, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants';
import Header from '../../components/header'
const Task1 = () => {
  const [firstInput, setFirstInput] = useState()
  const [secondInput, setSecondInput] = useState()
  const [thirdInput, setThirdInput] = useState()
  const [res, setRes] = useState(null)

  const calculate = () => {
    let value = 1
    if(10 < firstInput && 15 > firstInput) {
      value*=firstInput
    }
    if(10 < secondInput && 15 > secondInput) {
      value*=secondInput
    }
    if(10 < thirdInput && 15 > thirdInput) {
      value*=thirdInput
    }
    if(value > 1 && value !== firstInput && value !== secondInput && value !== thirdInput){
      setRes(value)
    }else {
      setRes(null)
    }
  }
  return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFF00",
        }}>
          <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}> Завдання: Задано три числа. Знайти добуток тих з них, які більші 10 і менші 15. </Text>
          <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} placeholder='Введіть число' onChangeText={text => setFirstInput(parseInt(text))}/>
          <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} placeholder='Введіть число' onChangeText={text => setSecondInput(parseInt(text))}/>
          <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} placeholder='Введіть число' onChangeText={text => setThirdInput(parseInt(text))}/>
          <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={calculate}>
            <Text style={styles.text}>Розрахувати</Text>
          </Pressable>
          <Text style={styles.res}>{res ? 'Результат : ' + res : null}</Text>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200 ,
    backgroundColor: 'orange'
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  res: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginTop: 20
  }
});

export default Task1;