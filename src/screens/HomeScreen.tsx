import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { obrasPoster } from '../components/obrasPoster';
import { useobrass } from '../hooks/useObras';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { Image } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useobrass();
    const { top } = useSafeAreaInsets();
   

    if ( isLoading ) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Image
                source={{uri:'https://i.ibb.co/mNvfTKV/logo-load.jpg'}}
                style={{width:450, height:750}}
                />
            </View>
        )
    }


    return (

        <ScrollView>
            <View style={{ marginTop: top  , backgroundColor: '#02152E'}}>
                {/* Carosel Principal */}
                <View style={{ height: 440 }}>
                    <Carousel 
                        data={ nowPlaying }
                        renderItem={ ({ item }: any) => <obrasPoster obras={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* obras populares */}
                <HorizontalSlider title="Obras populares" obrass={ popular } />
                <HorizontalSlider title="Mejores Obras" obrass={ topRated } />
                <HorizontalSlider title="Proximamente" obrass={ upcoming } />


            </View>
        </ScrollView>
    )
}
