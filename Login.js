// Import necessary components and libraries
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';


// Your Login component
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleLogin = () => {
    // Your login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const ok=()=>{
    navigation.navigate('Home')
  }

  const goToHomeP = () => {
    
    //here the logic will come to go home page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login </Text>
      <Image source={require('../AwesomeProject/src/screen/assets/logo.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Username/Email"
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={goToHomeP}>
        <Text style={styles.submitButtonText} onPress={ok}>Login</Text>
      </TouchableOpacity>

     
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo:{
    width:150,
    height:150,
    marginBottom:10,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    height:110,
    
    
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    width: '80%',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signUpLink: {
    marginTop: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
