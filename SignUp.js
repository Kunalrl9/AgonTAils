import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,Button,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';



const SignUp = () => {
 
  <ImageBackground
      source={require('../AwesomeProject/src/screen/assets/bg.jpg')} // Change this to the path of your image
      style={styles.backgroundImage}
    ></ImageBackground>


  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  

  const handleLogin = () => {
    // Perform login logic here
    console.log('Login pressed!');
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    navigation.navigate('Login');
    
  };
  const oky=()=>{
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <Image source={require('../AwesomeProject/src/screen/assets/logo.png')} style={styles.logo} />
      
    
    
    <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      
      
      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.loginSatment}> <Text style={styles.loginLink} onPress={oky} >Login</Text> with your AgonTales account</Text>
      

    
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // backgroundColor:"white",

  },
  
  loginLink:{
    color:"blue",
    
  },
  loginSatment:{
    paddingTop:10,
  },
  logo:{
    width:150,
    height:150,
    marginBottom:10,
    
  },

  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 17,
    height:190,
    
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
    backgroundColor:"#D9D9D9",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:100,
    paddingRight:100,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize:18,
  },
  
});

export default SignUp;
