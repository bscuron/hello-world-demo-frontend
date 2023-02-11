import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app! App is deployed on gh pages</Text>
            <IconButton
                icon="camera"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log('Pressed')}
            />
            <StatusBar style="auto" />
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
