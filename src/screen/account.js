import React from "react";
import { view, Text, Button, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';


const account =({navigator}) => {
    return (
        <view style={StyleSheet.container}>
            <Text> Profile </Text>
            <Button title="click Here"
            onPress={()=> alert('Button Clicked!')}
            />
        </view>
    );
};

export default account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});