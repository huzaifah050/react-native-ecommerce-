import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SingleJacket from './SingleJacket';

function DisplayScreen() {
  return (
    <View style={styles.container}>
     <View style={styles.iconsContainer}>
        <View style={styles.icons}>
        <MaterialCommunityIcons name="keyboard-backspace" size={18} color="black" style={styles.icon} />
      </View>
      <View style={styles.icons}>
        <Feather name="shopping-cart" size={18} color="#8345ff" style={styles.icon} />
      </View>
     </View>

     <Text style={styles.mainHeading}>Woman jacket</Text>

     <View style={styles.inputContainer}>
    <TextInput  placeholder='Search Jacket' style={styles.input} />
    <Text style={styles.filter}>Filter</Text>
     </View>

    <View style={styles.single}>
    <SingleJacket />
    <SingleJacket />
    <SingleJacket />
    <SingleJacket />

    </View>
    
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginHorizontal: 30
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  icons: {
    backgroundColor: '#f3f2f5',
    height:40,
    width: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,
elevation: 6,
  },
mainHeading: {
  fontWeight:'bold',
  textTransform: 'capitalize',
  marginTop: 30,
  fontSize:23,
  marginBottom: 20
},
input: {
  backgroundColor: '#f3f2f5',
  borderRadius: 10,
  height: 50,
  fontSize:16,
  paddingLeft: 20,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
 position: 'relative',
 zIndex:1
},
inputContainer: {
 
},

filter: {
  alignSelf:'flex-end',
  position: 'absolute',
  top:13,
  zIndex:2,
elevation: 28,
left:"85%",
color: '#8345ff',
fontSize:16,
fontWeight:'700'

},
single: {
  marginTop:70
}


})

export default DisplayScreen
