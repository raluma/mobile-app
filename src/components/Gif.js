import React from 'react';
import { View, Image } from 'react-native';
import FavBtn from './FavBtn'
import Fav from './Fav';

export default function Gif({ uri, width, height, optionFav }) {

    return (
        <View>
            <Image 
                source = {{ uri }}  
                style = {{ width, height }} 
            />

            { 
                optionFav ?
                    <FavBtn>
                        <Fav />
                    </FavBtn>
                : <></>
            }
        </View>
        
    );
}