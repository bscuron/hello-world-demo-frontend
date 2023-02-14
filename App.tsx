import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pressable } from "@react-native-material/core";
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

export default function App() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [zipcode, setZipcode] = React.useState("");
    const [age, setAge] = React.useState("");
    return (
        <PaperProvider>
            <TextInput
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                label="Zipcode"
                value={zipcode}
                onChangeText={zipcode => setZipcode(zipcode)}
            />
            <TextInput
                label="Age"
                value={age}
                onChangeText={age => setAge(age)}
            />
            <Avatar.Image size={150} source={require('./assets/cixinLiu.jpg')} />
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
