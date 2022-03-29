import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { obras } from '../interfaces/obrasInterface';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props {
    obras: obras;
    height?: number;
    width?: number;
}

export const obrasPoster = ({ obras, height = 420, width = 300 }: Props ) => {

    const uri = `https://e00-elmundo.uecdn.es/america/imagenes/2010/06/15/1276610835_0.jpg`;

    const navigation = useNavigation();
    
    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', obras ) }
            activeOpacity={0.8}
            style={ {
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
        >
            <View style={ styles.imageContainer }>
                <Image 
                    source={{ uri }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
});