import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
export default class HomeScreen extends React.Component {
render() {
return (
<View style={styles.container}>
<Text style={{color: '#674', fontSize: 25, fontWeight: 'bold'}}>
Sitios web
</Text>
<TouchableHighlight
style={styles.botones}
onPress={() =>
this.props.navigation.navigate('Web', {
sitio: 'Pagina Local',
})
}>
<Text style={styles.texto}>Pagina local</Text>
</TouchableHighlight>


</View>
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
botones: {
height: 40,
width: 300,
borderRadius: 10,
backgroundColor: '#abc',
marginLeft: 50,
marginRight: 50,
marginTop: 20,
justifyContent: 'center',
alignItems: 'center',
},
texto: {
color: '#fff',
fontSize: 30,
},
});