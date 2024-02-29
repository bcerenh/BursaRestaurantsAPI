import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
    <AntDesign styles={styles.iconStyle} name="search1" size={24} color="black" />
    <TextInput style={styles.inputStyle} autoCorrect={false} autoCapitalize="none" placeholder='Ne yemek istersin?' color='black' onChangeText={onTermChange} onEndEditing={onTermSubmit} value={term}/>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#FFFFFF',
        flexDirection:'row',  // yanyana yapmak istedğğim için 
        margin:10,
        alignItems:'center',
        height:50,
        borderRadius:20,

    },
    iconStyle:{
        marginHorizontal:15,
        // backgroundColor: 'light-gray',


    },
    inputStyle:{
        flex:1,
        fontSize:18,

    },

})