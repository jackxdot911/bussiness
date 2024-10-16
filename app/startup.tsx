import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router';


const startup = () => {
    return (
        <View style={styles.container}>
            <View></View>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/login-img.png')} style={styles.image} />
            </View>
            <View style={styles.content}>
               <Text style={styles.textStyle}>
                    Your ultimate <Text style={{color : Colors.PRIMARY}}> Community bussiness App</Text>
                </Text> 
                <TouchableOpacity style={styles.btn} onPress={()=>{
                router.push("/(tabs)/home")
            }}>
                <Text style={styles.btnTxt}>Let's get Started</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default startup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    image: { height: 500, width: 500 },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    content : {display :'flex' , alignItems : 'center'},
    textStyle : {fontSize : 30 , fontFamily : 'outfit-bold' ,textAlign : 'center' },
    btn : {backgroundColor : Colors.PRIMARY , padding :16 , borderRadius : 99 , margin :30},
    btnTxt: { textAlign: 'center', color: 'white', fontFamily: 'outfit-bold' , fontSize : 20 }
})