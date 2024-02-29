import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'


export default function ResultDetail({result}) {
  return (
    <View style={styles.container}>
        <Image  style={styles.image} source={result.image_url ? {uri:result.image_url} :null}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Yıldızlı Restaurant, {result.review_count} Değerlendirme</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginLeft:15,
        
        // justifyContent: 'center',
    },
    image:{
        width:250,
        height:120,
        borderRadius:10,
        // margin:10,
        // justifyContent: 'center',
        marginBottom:5,
    },
    name:{
        fontWeight:'bold',
    },
})