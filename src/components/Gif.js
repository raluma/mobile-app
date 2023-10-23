import React from 'react';
import { Image } from 'react-native';
import FavBtn from './FavBtn'
import Fav from './Fav';

export default function Gif({ uri, width, height }) {

    return (
        <Image 
            source = {{ uri }}  
            style = {{ width, height }} 
        />
        // <FavBtn>
        //   <Fav />
        // </FavBtn>
    );
}