import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>This is the Header</Text>
      </View>

      <View style={styles.body}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <Icon
            name='home'
            type='font-awesome' />
        </View>
        <View style={styles.footerIcon}>
          <Icon
            name='bell'
            type='font-awesome' />
        </View>
        <View style={styles.footerIcon}>
          <Icon
            name='user'
            type='font-awesome' />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.05,
    backgroundColor: 'salmon',
    paddingTop: 30,
    width: '100%'
  },
  body: {
    flex: 0.9,
    width: '100%'
  },
  footer: {
    flex: 0.05,
    width: '100%',
    backgroundColor: 'salmon',
    flexDirection: 'row',
  },
  footerIcon: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'center'
  }
} );
