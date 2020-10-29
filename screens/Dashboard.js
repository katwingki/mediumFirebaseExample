import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {loggingOut} from "../API/firebaseMethods";

export default function Dashboard({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');

  useEffect(()=>{
    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection("users")
      .doc(currentUserUID)
      .get();

      if(!doc.exists){
        Alert.alert("No user data found!")
      }else{
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
      }
    }
    getUserInfo();
  })

  const handlePress = () => {
    loggingOut();
    navigation.navigate('Home');
  };

return (
  <View style={styles.container}>
    <Text style={styles.titleText}>Dashboard</Text>
<Text style={styles.text}>Hi {firstName}</Text>
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Log Out</Text>
   </TouchableOpacity>
    </View>
)
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
    borderColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2E6194',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginTop:"2%",
    marginBottom: "10%",
    fontWeight: 'bold',
    color: 'black',
  }
});
