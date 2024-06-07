import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function LoginComponent() {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/Logo.jpeg')} style={styles.background} />
        </View>
        

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Bienvenido!</Text>
          <Text style={styles.subtitleText}>Ingresar con tu cuenta</Text>

          <TextInput
            style={styles.input}
            placeholder="multimedios@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            placeholderTextColor="#aaa"
          />
           <TouchableOpacity>
            <Text onPress={() => navigation.navigate('Recuperar')} style={styles.forgotPasswordText}>¿Has olvidado tu contraseña?</Text>
          </TouchableOpacity>
          <View style={styles.formBtn}>
          <LinearGradient
            colors={['#00C1BB', '#005B58']}
            style={styles.loginBtn}
          >
            <TouchableOpacity>
              <Text style={styles.loginBtnText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </LinearGradient>
              <Text style={styles.registerText}>No tiene cuenta</Text>
          <TouchableOpacity>
              <Text onPress={() => navigation.navigate('Register')} style={styles.registerLinkText}>Registrarse</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
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

