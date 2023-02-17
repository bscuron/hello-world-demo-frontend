import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import axios from 'axios';

export default function App() {
    const [children, setChildren] = useState([]);

    // Runs on component mount
    useEffect(() => {
        axios.get('https://cis-linux2.temple.edu/bucketlistBackend/message')
             .then(res => {
                 const msg: string = res.data.message;
                 const comp: Text = <Text key={children.length}>Message from server: `{msg}`</Text>;
                 setChildren(arr => [...arr, comp]);
             })
             .catch(err => console.log(err));
    }, []);

    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
