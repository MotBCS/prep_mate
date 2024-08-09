import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'

// Import Icon
import { icons } from '../constants';

const CustomButton = ({ icon, title, handlePress, containerStyles, textStyles, iconStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-orange rounded-full min-h-[62px] justify-center items-center ${containerStyles} {isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Image
                source={icon}
                resizeMode="contain"
                className={`w-6 h-6 mr-4 ${iconStyles}`}
            />

            <Text className={`font-primary_font text-lg text-primary ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton