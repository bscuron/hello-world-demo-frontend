import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pressable } from "@react-native-material/core";
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';

export default function App() {
    return (
        <PaperProvider>
        <View style={styles.container}>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            <Text>Open up App.tsx to start working on your app!</Text>
            <IconButton
                icon="camera"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log('Pressed')}
            />
            <StatusBar style="auto" />
        </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9e265', //green
        alignItems: 'center',
        justifyContent: 'center',
    },
});
