import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'

// Import Fonts
import { useFonts } from 'expo-font'


// Prevents splash screen from auto hidding before assets are loaded
SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
    // Import Custom Fonts
    const [fontsLoaded, error] = useFonts({
        "Jua": require("../assets/fonts/Jua-Regular.ttf"),
    });


    // UseEffect, performs actions while screen/page is loading
    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;


    // 'Slot' Renders Current Child Route
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout


/**
 * NOTES:
 * rnfes (React Native Function Export Component)
 * Template -------------------------------------------
 * import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RootLayout = () => {
    return (
        // Applying Styles (container class) To 'View'
        <View style={styles.container}>
            <Text>PrepMate</Text>
        </View>
    )
}

export default RootLayout

// Style Sheet
const styles = StyleSheet.create({

    // Container Class
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

*/
