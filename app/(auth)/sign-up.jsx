import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Import Icon
import { icons } from '../../constants';

// Import Custom Button Component
import CustomButton from '../../components/CustomButton';

// Import Custom FormField Component
import FormField from '../../components/FormField';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    const submit = async () => {
        if (form.username === "" || form.email === "" || form.password === "") {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        setSubmitting(true);

        try {
            const result = await createUser(form.email, form.password, form.username);
            router.replace("/home");
        } catch (error) {
            const errorMessage = error?.message || 'An unexpected error occurred';
            Alert.alert('Error', errorMessage);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center items-center px-4 my-6">
                    <Text className="text-5xl font-primary_font text-orange mt-10">PrepMate</Text>
                    <Text className="text-lg font-primary_font text-navy mt-3 mb-10">Create an account</Text>
                    <Image
                        source={icons.placeHolderIcon}
                        resizeMode='contain'
                        className="w-[430px] h-[150px]"
                    />
                </View>

                <View className="px-4">
                    <FormField
                        icon={icons.user}
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="border-4 border-solid border-orange rounded-full"
                        placeholder="Username"
                    />
                    <FormField
                        icon={icons.envelopeOrange}
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="border-4 border-solid border-orange rounded-full"
                        keyboardType="email-address"
                        placeholder="email@gmail.com"
                    />
                    <FormField
                        icon={icons.keyOrange}
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="border-4 border-solid border-orange rounded-full"
                        placeholder="******"
                    />
                    <CustomButton
                        title="SIGN UP"
                        handlePress={submit}
                        isLoading={isSubmitting}
                        containerStyles="w-full mt-2 bg-orange pb-4"
                    />
                    <CustomButton
                        icon={icons.google}
                        title="LOGIN WITH GOOGLE"
                        handlePress={() => { }}
                        containerStyles="w-full mt-2 bg-navy flex-row"
                    />
                    <View className="justify-center items-center flex-row pt-5 gap-2">
                        <Text className="text-md font-primary_font text-navy">Already have an account?</Text>
                        <Link href="./sign-in" className='font-primary_font text-md text-orange'>
                            Sign In
                        </Link>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#ffffff' />
        </SafeAreaView>
    );
}

export default SignUp;
