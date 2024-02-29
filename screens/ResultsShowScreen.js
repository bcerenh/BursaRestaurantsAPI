import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import  { useEffect, useState} from 'react'
import yelp from '../api/yelp';
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';





export default function ResultsShowScreen({route}) {
    const [result, setResult] = useState(null);
    const id=route.params.id;
   
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);

        
        setResult(response.data);
      };
      useEffect(() => {
        getResult(id);
      }, []);
      if (!result) {
        return null;
      }

  return (
    <View>
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.titleText}>Telefon:</Text>
        <Text style={styles.phone}>{result.phone}</Text>
       
        <View style={styles.icon}>
        {result.is_closed ? (
          <AntDesign name="closecircleo" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="black" />
        )}
      </View>
      
     <FlatList 
     data={result.photos}
     renderItem={({ item }) => {
       return <Image style={styles.image} source={{ uri: item }} />;
     }}/>
    </View>
  )
}

const styles = StyleSheet.create({
   
    image: {
        height: 160,
        margin: 10,
        borderRadius: 20,
      },
      title: {
        alignSelf: 'center',
        fontSize: 25,
        marginVertical: 10,
      },
      phone: {
       flexDirection:'row',
        fontSize: 20,
      },
      titleText:{
        flexDirection:'row',
        fontWeight: 'bold',
    fontSize: 16,
      },
      icon: {
        alignSelf: 'center',
      },
     
    });
