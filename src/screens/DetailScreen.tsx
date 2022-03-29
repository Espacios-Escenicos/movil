import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';

import { useObraDetails } from '../hooks/useObraDetails';
import { obrasDetails } from '../components/ObraDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;



interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( { route, navigation }: Props ) => {

    const obras = route.params;
    const uri = `https://www.dondeir.com/wp-content/uploads/2018/01/6-obras-teatro-en-enero-2018-inicia-actitud-07.jpg`;

    const { isLoading, cast, obraFull: obrasFull } = useObraDetails( obras.id );


    return (

        <ScrollView style={styles.backgroundComponent}>
            <View style={ styles.imageContainer }>
                <View style={ styles.imageBorder }>
                    <Image 
                        source={{ uri }}
                        style={ styles.posterImage }
                    />
                </View>
            </View>

            <View style={ styles.marginContainer }>
                <Text style={ styles.subTitle }>{ obras.original_title }</Text>
                <Text style={ styles.title }>{ obras.title }</Text>
            </View>

            
            {
                isLoading 
                    ? <ActivityIndicator size={ 35 } color="grey" style={{ marginTop: 20 }} />
                    : <obrasDetails obraFull={ obrasFull! } cast={ cast } />
            }

            {/* Boton para cerrar */}
            <View style={ styles.backButton }>
                <TouchableOpacity
                    onPress={() => navigation.pop() }
                >
                    <Icon 
                        color="white"
                        name="arrow-back-outline"
                        size={ 60 }
                    />
                </TouchableOpacity>
            </View>
                
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backgroundComponent: {
        backgroundColor: '#02152E'
    },
    imageContainer: {
        backgroundColor: 'blue',
        // overflow: 'hidden',
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },

    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage: {
        flex: 1,
    },

    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
        color:'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5,
    }
});