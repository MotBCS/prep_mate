import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import Icon
import { icons } from '../constants';

//Import Custom Button
import CustomButton from '../components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">

            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">

                    <Text className="text-5xl font-primary_font text-orange mt-10 mb-20">PrepMate</Text>

                    <Image
                        source={icons.placeHolderIcon}
                        className="w-[430px] h-[150px]"
                        resizeMode="contain"
                    />

                    <CustomButton
                        icon={icons.envelope}
                        title="LOGIN WITH EMAIL"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-11 flex-row"
                    />

                    <CustomButton
                        icon={icons.google}
                        title="LOGIN WITH GOOGLE"
                        handlePress={() => { }}
                        containerStyles="w-full mt-7 bg-navy flex-row"
                    />

                    <View className="justify-center items-center flex-row pt-5 gap-2">
                        <Text className="text-md font-primary_font text-navy">Don't have an account?</Text>

                        <Link href="./sign-up" className='font-primary_font text-md text-orange'>
                            Sign Up
                        </Link>
                    </View>
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#ffffff' />

        </SafeAreaView>
    );
}


/*
 * NOTES:
    "index.jsx" --> App Home Page


    <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font-primary_font">PrepMate</Text>
            <StatusBar style="auto" />

            <Link href="/home">Go To Home</Link>
        </View>


 <SafeAreaView> Ensures are content is viewable on all devices, makes sure content
 doesn't overlap with the status or bottom bar.

 ScrollView contentContainerStyle={{height:100%}} Makes the whole screen scrollable,
 this ensure that smaller device can still see all content
 */