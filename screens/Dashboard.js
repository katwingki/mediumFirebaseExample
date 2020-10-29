import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {loggingOut} from "../API/firebaseMethods";

//import 'firebase/firestore';
// import {
//   useCollection,
//   useDocument,
//   useDocumentOnce,
// } from 'react-firebase-hooks/firestore';

// const db = firebase.firestore();

export default function Dashboard({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;

  // const [value, loading, error] = useDocument(
  //   firebase.firestore().collection('users').doc(currentUserUID)
  // );

  // async function loggingOut() {
  //   await firebase.auth().signOut();
  //   navigation.navigate('Home');
  //}
  const handlePress = () => {
     console.log(currentUserUID)
    loggingOut();
    navigation.navigate('Home');
  };
return (
  <View>
    <Text>Dashboard</Text>
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Log Out</Text>
   </TouchableOpacity>
    </View>
)
  // if (error) {
  //   return <View>{error}</View>;
  // } else if (loading) {
  //   return <ActivityIndicator size='large' />;
  // } else if (value && value.data()) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>
  //         Hello
  //         {value && value.data() ? ` ${value.data().firstName}!` : null} You are
  //         currently logged in.
  //       </Text>
  //       <TouchableOpacity style={styles.button} onPress={handlePress}>
  //         <Text style={styles.buttonText}>Log Out</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3FC5AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 150,
    padding: 5,
    backgroundColor: '#ff9999',
    borderWidth: 2,
    borderColor: '#ffcccc',
    borderRadius: 15,
    alignSelf: 'center',
  },
});
