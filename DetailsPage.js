import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import SingleJacket from './SingleJacket';
import LinearGradient from 'react-native-linear-gradient';

function DetailsPage() {
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

<View style={styles.bigBox}>
   <View style={styles.box}></View>
   <Image source={require('./assets/img.png')} style={styles.image} />
   </View>

<Text style={styles.heading}>Red woman jacket</Text>
<View style={styles.reviewWrapper}>
  <Text style={styles.reviewText}>Review:</Text>

   <View style={styles.stars}>
    <Entypo name="star" size={20} color="#e8d13f" />
    <Entypo name="star" size={20} color="#e8d13f" />
    <Entypo name="star" size={20} color="#e8d13f" />
    <Entypo name="star" size={20} color="#e8d13f" style={styles.grayIcon} />
    <Entypo name="star" size={20} color="#e8d13f" style={styles.grayIcon} />
  </View>
</View>
<View style={styles.bar}></View>

    <Text style={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, quod obcaecati itaque?</Text>
    
    <View style={styles.textBox}>
      <Text style={styles.txtBox}>Lorem ipsum dolor, sit amet consectetur</Text>
    </View>

<View style={styles.sizes}>
    <View style={styles.size}>
    <Text style={styles.textSize}>xs</Text>
    </View>
    <View style={styles.size}>
    <Text style={styles.textSize}>s</Text>
    </View>
    <View style={[styles.size, styles.medium]}>
    <Text style={[styles.textSize, styles.medium]}>m</Text>
    </View>
    <View style={styles.size}>
    <Text style={styles.textSize}>l</Text>
    </View>
    <View style={styles.size}>
    <Text style={styles.textSize}>xl</Text>
    </View>
    </View>

<View style={styles.addToCartBox}>
<View style={styles.checkOut}>
  <Text style={styles.amount}>Total Amount</Text>
  <Text style={styles.price}>$110</Text>
</View>
<View style={styles.addToCart}>
  <Text style={styles.addToCartTxt}>Add to Cart</Text>
</View>
</View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginHorizontal: 50
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
  bigBox:{
    position:'relative'
  },
box: {
  marginTop:50,
   height:300,
   width:'100%',
   borderBottomLeftRadius:20,
   borderBottomRightRadius:20,
   borderRadius:20,
   backgroundColor: '#f3f2f5',
     transform: [
   
      // { perspective: 850 },
     
      // { rotateY: '120deg'},

    ], 
},
image: {
  width:"80%",
  height:300,
  position:'absolute',
  left: 30
  

},
reviewWrapper:{
  flexDirection: 'row'
},
heading:{
  marginTop:20,
  fontWeight:'bold',
  fontSize:23,
  textTransform:'capitalize',
  marginBottom: 10
  
},
reviewText: {
  fontWeight:'bold',
  letterSpacing:.4
},
stars: {
    flexDirection:'row'
  },
bar: {
  marginVertical:25,
  width: 50,
  height:3,
  backgroundColor:'#8345ff',
},
desc: {
  lineHeight:25,
  fontSize:15
},
textBox: {
  marginTop:25,
  backgroundColor:'#f3f2f5',
  paddingHorizontal: 30,
  paddingVertical:10,
  marginLeft:-50,
  marginRight:-50
  
},
txtBox:{
color: '#8345ff',
fontWeight:'600',
fontSize:15
},
sizes:{
  marginTop: 27,
flexDirection:'row',
},
size: {
  width:40,
  height:40,
  backgroundColor:'#f3f2f5',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:5,
  marginRight:10
},
medium:{
  backgroundColor:'#8345ff',
  color:'#f3f2f5'
},
textSize:{
  textTransform:'uppercase',
  fontWeight:'bold',
  fontSize:11
},
addToCartBox: {
  marginTop:45,
  borderRadius:10,
  backgroundColor: '#8345ff',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  height:65
},
checkOut:{
  marginLeft:15
},
amount:{
  color:'#f3f2f5',
  fontSize:10
},
price:{
  color:'#f3f2f5',
  fontSize:20,
  fontWeight:'bold'
},
addToCart:{
  marginRight:15,
  backgroundColor:'#641bf5',
  height:35,
  alignItems:'center',
  justifyContent:'center',
  paddingHorizontal:15,
  borderRadius:10
  
},
addToCartTxt:{
color:'#f3f2f5',
fontWeight:'bold',
fontSize:11
}
})

export default DetailsPage
