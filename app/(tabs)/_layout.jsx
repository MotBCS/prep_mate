import { Image, View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

// Import Icon
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-1">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className="text-md" style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel: false, tabBarActiveTintColor: '#BD4F00', tabBarInactiveTintColor: '#345269', tabBarStyle: {
                    backgroundColor: '#F5E5DD', position: 'absolute', paddingTop: 25, bottom: 45, left: 15, right: 15, elevation: 0, borderRadius: 50, height: 90,
                    shadowColor: '#A68E82', shadowOffset: { width: 0, height: 15, }, shadowOpacity: 0.25, shadowRadius: 5.84, elevation: 5,
                },
            }}>

                {/* HOME TAB */}
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />

                {/* MESSAGES TAB */}
                <Tabs.Screen
                    name="messages"
                    options={{
                        title: 'Messages',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.message}
                                color={color}
                                name="Messages"
                                focused={focused}
                            />
                        )
                    }}
                />

                {/* RECIPES TAB */}
                <Tabs.Screen
                    name="recipes"
                    options={{
                        title: 'Recipes',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.magnifying_glass}
                                color={color}
                                name="Recipes"
                                focused={focused}
                            />
                        )
                    }}
                />

                {/* LISTS TAB */}
                <Tabs.Screen
                    name="lists"
                    options={{
                        title: 'Lists',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.list}
                                color={color}
                                name="Lists"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout