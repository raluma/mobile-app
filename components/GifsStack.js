import React from 'react';
import Gif from './Gif';


export default function GifsStack({ quantity }) {
  
  return (
    <Gif 
      uri = {'http://www.clicktorelease.com/code/gif/1.gif'}  
      width = {100}
      height = {100}
    />
  );
}