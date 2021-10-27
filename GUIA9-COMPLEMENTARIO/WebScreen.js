import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { WebView } from 'react-native-webview';
import htmle from './assets/ejemplo.html'
export default class WebScreen extends React.Component {

  render() {

const lugar= require('./assets/ejemplo.html').uri;
const html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Es un ejemplo</title>
</head>
<body>
     <h1>Aca se puede leer la pagina local desde react native </h1>
</body>
</html>`
const weblugar={html:htmle};
    return (
      
      <WebView
      
        style= {{flex: 1}}
  originWhitelist={['*']}
  allowFileAccess={true}    
        source={weblugar}
          domStorageEnabled={true}
          allowUniversalAccessFromFileURLs={true}
          allowFileAccessFromFileURLs={true}
          mixedContentMode="always"
>
        </WebView>
    );
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  webSize: {
    width: '100%',
    height: '100%',
  },
});