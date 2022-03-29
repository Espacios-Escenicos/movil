import React from 'react'
import { Button, FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';


import { ObraFull as ObraFull } from '../interfaces/obrasInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';
import {Linking} from 'react-native';
interface Props {
    obraFull: ObraFull;
    cast: Cast[]
}


export const obrasDetails = ({ obraFull: obraFull, cast }: Props) => {
    return (
        <>{/*Nav*/}
        
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>

                    <Text style={{ marginLeft: 5, color:'#FFFFFF' }}>
                        - {obraFull.genres.map(g => g.name).join(', ')}
                    </Text>

                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'#FFFFFF', fontFamily:'Barlow' }}>
                    Sinopsis
                </Text>

                <Text style={{ fontSize: 16, color:'#FFFFFF' }}>
                    {obraFull.overview}
                </Text>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'#FFFFFF', fontFamily:'Barlow' }}>
                    Lugar
                </Text>
                <Text style={{ fontSize: 16, color:'#FFFFFF' }}>
                    Teatro Degollado
                </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'#FFFFFF', fontFamily:'Barlow' }}>
                    Fecha
                </Text>
                <Text style={{ fontSize: 16, color:'#FFFFFF' }}>
                    26 de Marzo a 03 de Abril del 2022 
                </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'#FFFFFF', fontFamily:'Barlow' }}>
                    Horario
                </Text>
                <Text style={{ fontSize: 16, color:'#FFFFFF' }}>
                    4pm, 6pm y 10 pm
                    {"\n"}{"\n"}
                </Text>
                
                <Button
                title='Comprar Tickets'
                onPress={()=>Linking.openURL('panelespaciosescenicos.jalisco.gob.mx/web_qa/')}
                />

            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20,color:'#FFFFFF' }}>
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item, index) => item.id.toString() + index}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />


            </View>

        </>
    )
}
