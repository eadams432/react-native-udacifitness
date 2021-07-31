import React from 'react';
import { render } from 'react-dom';
import { Text } from 'react-native'

export default function DateHeader(props){
    return (
        <Text>{props.date}</Text>
    );
}