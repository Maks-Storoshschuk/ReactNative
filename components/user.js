import {FlatList, StyleSheet} from "react-native";
import {View,Text,Button,TouchableOpacity} from "react-native";
import {getUsers} from "../services/Api";
import React from "react";

const User=({item})=>{
    return <View style={[styles.userBox , styles.margins,styles.sizes]}>
        <Text style={[styles.align,styles.sizes]}>{item.name}</Text>
    </View>
}
export default User;
let styles = StyleSheet.create({
    userBox:{
        flex:1,
        backgroundColor: 'silver',
        textAlign: "center",
        justifyContent: "center",
        width: '70%',
    },
    margins:{
        marginBottom: 3
    },
    sizes:{
        height: 70
    },
    align:{
        justifyContent: "center"
    }


})