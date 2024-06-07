import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from './Components/Login';
import RecuperarPasword1 from './Components/RecuperarPs1';
import RecuperarPasword2 from './Components/RecuperarPs2';
import RegisterComponent from './Components/RegisterUser';

export default function App() {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginComponent} options={{ headerShown: false }} />
         <Stack.Screen name="Recuperar" component={RecuperarPasword1} options={{ headerShown: false }} />
         <Stack.Screen name="Recuperar2" component={RecuperarPasword2} options={{ headerShown: false }} />
         <Stack.Screen name="Register" component={RegisterComponent} options={{ headerShown: false }} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    width: '110%',
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    marginBottom: 20,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: '100%'
  },
  formContainer: {
    width: '100%',
    padding: 20,
    paddingTop: 220,
  },
  welcomeText: {
    fontSize: 59,
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: 10,
    color: '#333',
  },
  subtitleText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
    textAlign: 'left'
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#00aaff',
    marginBottom: 20,
    textAlign: 'right',
  },
  loginButton: {
    width: '50%',
    height: 50,
    backgroundColor: '#00C1BB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 40,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },

  registerLinkText: {
    color: '#00aaff',
  },
  button: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

  },

  registerText:{
    color:'#007BFF'
    
  },

  loginBtn: {
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
    width: '80%',
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  formBtn:{
alignItems: 'center'
  }

});

