import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const RestaurantCard = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{props.item.name}</Text>
            </View>
            
            <Text style={styles.typeText}>{props.item.type}</Text>

            <Image
                style={styles.logo}
                source={{uri: props.item.logo}}
            />
            
            <Text style={styles.description}>{props.item.description}</Text>

            <Text style={styles.review}>{props.item.review}</Text>

        </View>
    );
};

export {RestaurantCard};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        padding: 10,
        margin:5,
        borderRadius:5,
        backgroundColor:'#ffe0b2'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 25,
    }, 
    typeText: {
        fontStyle: 'italic',
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    logo:{
        height: Dimensions.get('window').height / 3
    },
    description: {
      margin: 5,
      fontWeight: 'bold'  
    },
    review: {
        margin: 5,
        fontStyle: 'italic',
        fontSize: 17
    }

    

})