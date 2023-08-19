import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const   ProductCard = ({item}) => {
  const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={()=>navigation.navigate("ProductDetails",{productID : item.productID})}>
            {/* <View> */}
                <Image style={styles.pImage} source={{ uri : item.imgURL}}/>
            {/* </View> */}
            <View style={styles.textContainer}>
                <Text style={styles.brand}>{item.brandName.substr(0,20)}</Text>
                {/* brands dalna hai */}
                <Text style={styles.description}>{item.productName.substr(0,20)}</Text>
                <Text style={styles.price}>₹{item.cost}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
       backgroundColor:'white',
       flex:1,    
       paddingHorizontal:12,
       paddingBottom:20,
    },
    textContainer:{
        paddingTop:10
    },
    pImage:{
        height:Dimensions.get('window').height/4,
        resizeMode:'contain',
        borderWidth:10,
        borderRadius:25,
       borderWidth:52,
    },
    brand:{
        fontWeight:'400',
        fontSize:15,
        letterSpacing:1
    },
    description:{
        fontSize:13,
        color:'#9D9D9D',
        letterSpacing:0.5
    },
    price:{
        fontWeight:'900',
        fontSize:16
    }

})

export default ProductCard;