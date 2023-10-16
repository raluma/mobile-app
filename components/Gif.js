import React from 'react';
import { Image } from 'react-native';
import FavBtn from '../components/FavBtn'
import Fav from '../components/Fav';

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