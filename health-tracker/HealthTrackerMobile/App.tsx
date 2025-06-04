/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, useColorScheme } from 'react-native';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#18181b' : '#f8fafc' }]}> 
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Image source={require('./assets/STil_AppleLogo_converted.png')} style={styles.logo} />
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#222' }]}>Optima Health</Text>
      <Text style={[styles.subtitle, { color: isDarkMode ? '#ccc' : '#555' }]}>Optimize your body. Track your health, nutrition, and progress with seamless integration of your phone and wearables.</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? '#fff' : '#222' }]}> 
        <Text style={[styles.buttonText, { color: isDarkMode ? '#222' : '#fff' }]}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>&copy; {new Date().getFullYear()} Optima Health. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 320,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 32,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    color: '#888',
    fontSize: 14,
    position: 'absolute',
    bottom: 24,
    textAlign: 'center',
    width: '100%',
  },
});
