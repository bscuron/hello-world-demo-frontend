import React, { memo, useState, useEffect } from 'react';
import { Navigation } from '../types';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import axios from 'axios';

type Props = {
    navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
    const [children, setChildren] = useState([]);

    // Runs on component mount
    useEffect(() => {
        axios
            .get('https://cis-linux2.temple.edu/bucketlistBackend/message')
            .then((res) => {
                const msg: string = res.data.message;
                const comp: Text = (
                    <Text key={children.length}>
                        Message from server: `{msg}`
                    </Text>
                );
                setChildren((arr) => [...arr, comp]);
            })
            .catch((err) => console.log(err));
    }, []);

    return <View style={styles.container}>{children}</View>;
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
