import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useEffect } from 'react';
import { registerForPushNotificationsAsync } from '../notifications';

const WEBSITE_URL = 'https://saberin-khonj.com/';

export default function HomeScreen() {

  useEffect(() => {
  registerForPushNotificationsAsync()
    .then((token) => {
      console.log('PUSH TOKEN:', token);
    })
    .catch((error) => {
      console.error('Push registration error:', error);
    });
}, []);


  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: WEBSITE_URL }}
        style={styles.webview}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  webview: {
    flex: 1,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});