import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Keyboard,
  StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { registration } from "../API/firebaseMethods";

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePressSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      const userUID = registration(
        email,
        password,
        lastName,
        firstName,
      );
      navigation.navigate("Dashboard", userUID);
      emptyState();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account </Text>

      <ScrollView onBlur={Keyboard.dismiss}>
        <TextInput
          style={styles.textInput}
          placeholder="First name*"
          value={firstName}
          onChangeText={(name) => setFirstName(name)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last name"
          value={lastName}
          onChangeText={(name) => setLastName(name)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter your email*"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter your password*"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Retype your password to confirm*"
          value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3FC5AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    margin: "5%",
    fontWeight: 'bold',
    color: '#2E6194',

  },
  textInput: {
    width: 300,
    fontSize:18,
    borderWidth: 1,
    borderColor:'#a4eddf',
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: '#ff9999',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
    margin: "5%",
  },
});
