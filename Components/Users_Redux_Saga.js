import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../Styles/Users_Redux_Saga_Styles';
import {useDispatch, useSelector} from 'react-redux';
import {GET_USERS} from '../Redux/Actions/UsersActions';

const Users_Redux_Saga = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  console.log(users);

  const getuser = () => {
    dispatch({type: GET_USERS, payload: ''});
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex_box1}>
        <Text style={styles.heading}>Fetch Data From API Using Redux Saga</Text>
        <FlatList
          data={users}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View style={styles.flatlist}>
              <Text style={styles.text}>ID : {item.id}</Text>
              <Text style={styles.text}>Name : {item.name}</Text>
              <Text style={styles.text}>UserName : {item.username}</Text>
              <Text style={styles.text}>Email : {item.email}</Text>
              <Text style={styles.text}>Phone : {item.phone}</Text>
              <Text style={styles.text}>Website : {item.website}</Text>
              <Text style={styles.text}>Comapany : {item.company.name}</Text>
              <Text style={styles.text}>City : {item.address.city}</Text>
              <Text style={styles.text}>Street : {item.address.street}</Text>
              <Text style={styles.text}>ZipCode : {item.address.zipcode}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.flex_box2}>
        <TouchableOpacity style={styles.button} onPress={getuser}>
          <Text style={styles.buttontext}>Fetch Users</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Users_Redux_Saga;
