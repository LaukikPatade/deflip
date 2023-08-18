import React, { useState } from 'react';
import { StyleSheet,Dimensions,Image,View, Text, SafeAreaView ,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={require('../assets/notification.jpg')}/>
                <Text style={styles.noNoti}>No Notification Yet</Text>
                <Text style={styles.text}>Simply browse, create a wishlist or make a purchase</Text>
                <TouchableOpacity>
                    <Text style={styles.btn} onPress={()=>navigation.navigate("Home")}>
                        Continue Shopping
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center',
       
    },
    innerContainer:{
        width:'85%',
        justifyContent:'center',
        alignItems: 'center',
            
    },
    image:{
        height:Dimensions.get('window').height/4,
        width:Dimensions.get('window').width/2,
    },
    noNoti: {
        fontSize: 20,
        fontWeight:'bold',
        paddingVertical:10
    },
    text:{
        fontSize:15,
        letterSpacing:1
    },
    btn:{
        fontSize:13,
        fontWeight:'500',
        backgroundColor:'rgba(60,9,108,1)',
        color:'white',
        padding:10
    }
})