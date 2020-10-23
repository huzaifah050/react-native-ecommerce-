import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';


function SingleJacket() {
  return (
    <View style={styles.parentContainer}>
<View style={styles.container}>
  <View>
  <View style={styles.box}></View>
  <Image source={require('./assets/img.png')} style={styles.image} />
</View>
<View style={styles.textContent}>
  <Text style={styles.name}>Bike jacket soft warm</Text>
  <View style={styles.stars}>
    <Entypo name="star" size={20} color="#e8d13f" />
    <Entypo name="star" size={20} color="#e8d13f" />
    <Entypo name="star" size={20} color="#e8d13f" />
    <Entypo name="star" size={20} color="#e8d13f" style={styles.grayIcon} />
    <Entypo name="star" size={20} color="#e8d13f" style={styles.grayIcon} />
  </View>
  <Text style={styles.price}>$99</Text>
</View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  parentContainer:{
    marginBottom:50
  },
  container: {
    flexDirection:'row',
    alignItems: 'center'
  },
  box: {
       width: 180,
   height: 100,
  backgroundColor:'#f3f2f5',
  borderRadius:20,
    transform: [
      { perspective: 950 },
      { rotateY: '120deg'},
      
    ],
    marginLeft: -35,
  position: 'relative'
  },

  image: {
    height:100,
    width: 70,
    position: 'absolute',
    top: -20,
    left:20
  },
  textContent: {
marginLeft: -20
  },
  name: {
fontWeight:'bold',
fontSize: 15
  },
  price: {
    fontWeight: '700',
    color:'#8345ff',
    fontSize:16
  },
  stars: {
    marginVertical:7,
    flexDirection:'row'
  },
  grayIcon: {
    color: '#918f89'
  }

})
export default SingleJacket
