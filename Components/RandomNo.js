import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import styles from '../Styles/RandomNoStyles';

const RandomNo = () => {
  const [randomnumber, Setrandomnumber] = useState(1);
  const [number, setnumber] = React.useState(null);
  const [score, Setscore] = useState(0);
  const [attempts, Setattempts] = useState(5);
  const [list, setlist] = useState([]);

  useEffect(() => {
    if (score == 3) {
      Alert.alert('You Won the Game');
      Setscore(0);
      Setattempts(5);
      setnumber(null);
    }
    if (attempts == 0) {
      Alert.alert('Game Over!!! You Lose the Game');
      Setscore(0);
      Setattempts(5);
      setnumber(null);
    }
  }, [score, attempts]);

  const GenerateNumber = () => {
    const RandomNumber = Math.floor(Math.random() * 10) + 1;
    Setrandomnumber(RandomNumber);
    if (number == randomnumber) {
      Alert.alert('Your Guess is Correct');
      Setscore(score + 1);
    } else {
      Alert.alert('Your Guess is Wrong');
    }
    Setattempts(attempts - 1);
    list.push(number);
  };

  const HintNumber = () => {
    if (randomnumber % 2 != 0) {
      Alert.alert('Number is Odd');
    } else {
      Alert.alert('Number is Even');
    }
  };

  const validatefield = () => {
    if (number > 10 || number < 1) {
      Alert.alert('Input is not correct');
    } else {
      GenerateNumber();
    }
  };

  const PlayAgain = () => {
    Alert.alert(
      'Are You Sure Want To Play this Game Again : ',
      'Choose Options',
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {
          text: 'OK',
          onPress: () => {
            setnumber(null);
            Setscore(0);
            Setattempts(5);
            setlist([]);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex_box}>
        <Text style={styles.input}>Guess the Number between 1 to 10</Text>
      </View>

      <View style={styles.flex_box}>
        <TextInput
          style={styles.textinput}
          placeholder="Guess Number"
          keyboardType="numeric"
          onChangeText={setnumber}
          value={number}
          onSubmitEditing={validatefield}
        />
      </View>

      <Text>{randomnumber}</Text>

      <View style={styles.flex_box}>
        <Text style={styles.input}>Your Score : {score}</Text>
      </View>

      <View style={styles.flex_box}>
        <Text style={styles.input}>No of Attempts Left : {attempts}</Text>
      </View>

      <View style={styles.flex_box}>
        <Text style={styles.input}>Your Guesses are :</Text>
        <FlatList
          horizontal
          data={list}
          renderItem={({item}) => (
            <View>
              <Text style={{fontSize: 20}}>{item + '  '}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.flex_box}>
        <TouchableOpacity style={styles.button} onPress={() => HintNumber()}>
          <Text style={styles.buttontext}>Hint</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flex_box}>
        <TouchableOpacity style={styles.button} onPress={() => PlayAgain()}>
          <Text style={styles.buttontext}>Play Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RandomNo;
