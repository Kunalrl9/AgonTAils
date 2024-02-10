import React from "react";
import { view, Text, Button, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';


const Manga_Makare =({navigator}) => {
    return (
        <view style={StyleSheet.container}>
            <Text>make your own Manga </Text>
            <Button title="click Here"
            onPress={()=> alert('Button Clicked!')}
            />
        </view>
    );
};

export default Manga_Makare;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});