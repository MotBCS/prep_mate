import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

// Import Icon
import { icons } from '../constants';


const FormField = ({ icon, title, value, placeholder, handleChangeText, containerStyles, otherStyles, iconStyles, ...props }) => {

    const [showPassword, setshowPassword] = useState(false)
    return (
        <View className={`space-y-2 bg-creme focus:border-green items-center flex-row p-4 mb-4 ${otherStyles}`}>
            <Image
                source={icon}
                resizeMode="contain"
                className={`w-7 h-7 mr-4 ${iconStyles}`}
            />

            <TextInput
                title={title}
                className="flex-1 text-navy font-primary_font pb-2"
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#345269'
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            />

            {title === 'Password' && (
                <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                    <Image
                        source={!showPassword ? icons.closedEyes : icons.openEyes}
                        resizeMode="contain"
                        className={`w-7 h-7 mr-4 mb-1 ${iconStyles}`}
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default FormField


/*

*/