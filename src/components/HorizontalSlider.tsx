import React from 'react'
import { FlatList, Text, View } from 'react-native';

import { obrasPoster } from './obrasPoster';


interface Props {
    title?: string;
    obras?: []
}


export const HorizontalSlider = ({ title, obras }: Props) => {
    

    return (
        <View style={{ 
            height: ( title ) ? 260 : 220
        }}>

            {
                title && <Text style={{color:'white', fontSize: 34, fontWeight: 'bold', marginLeft: 10, fontFamily:'barlow' }}>{ title }</Text>
            }

            <FlatList
                data={ obras }
                renderItem={ ({ item }: any) => (
                    <obrasPoster obras={ item } width={ 140 } height={ 200 } />
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />

        </View>
    )
}
