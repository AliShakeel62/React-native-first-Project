import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import axios from 'axios';

export default function Signup() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const signpost = () => {
    setLoading(true);  
    axios.post('https://back-end-with-mongo-db.vercel.app/auth/singup', {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: Password,
    })
    .then((res) => {
      setLoading(false); 
      if (res) {
        Alert.alert("Sign up successfully");
        console.log(res);
      }
    })
    .catch((err) => {
      setLoading(false);  
      console.log(err);
      Alert.alert("Sign up failed");
    });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white', display: 'flex' }}>
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='First Name'
            placeholderTextColor="grey"
            onChangeText={setfirstname}
          />
          <TextInput
            style={styles.input}
            placeholder='Last Name'
            placeholderTextColor="grey"
            onChangeText={setlastname}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor="grey"
            onChangeText={setemail}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor="grey"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
      </View>
      
      <View style={styles.ButtonCon}>
      {loading ? (
          <ActivityIndicator size="large" color="#9775FA" />
        ) : (
          <TouchableOpacity style={styles.customButton} onPress={signpost}>
            <Text style={styles.buttonText}>Sing-up</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: '700',
    paddingTop: 110,
    textAlign:"center",
  },
  inputContainer: {
    marginTop: 15,
  },
  input: {
    height: 40,
    marginBottom: 10,
    width: 250,
    paddingLeft: 40,
    color: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    fontSize: 20,
  },
  ButtonCon: {
    marginTop: 257,
    height: "100%",
  },
  customButton: {
    backgroundColor: '#9775FA',
    paddingVertical: 15,
    paddingHorizontal: 100,

  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
