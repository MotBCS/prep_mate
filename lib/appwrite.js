import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';
import SignIn from '../app/(auth)/sign-in';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.motbucket.prepmate',
    projectId: '66b69498003ae6aed02f',
    databaseId: '66b6965a0028921751d4',
    userCollectionId: '66b69690000a2fb46e80',
    plannerCollectionId: '66b696c20018ca47cf34',
    recipeCollectonId: '66b6a0940038a1b2ccd9',
    listCollectionId: '66b6b1a1000ddfcee9f7',
    storageId: '66b6b3a00015d0675ebb',
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


// Function to create a new user
export const createUser = async (email, password, username) => {
    // Register User
    try {
        // Try to create new account
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        if (!newAccount) throw Error;

        // Gets the initals of the users name
        const avatarUrl = avatars.getInitials(username);

        await SignIn(email, password);

        // Create new user in database
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );
        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

// Function to sign in
export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;

    } catch (error) {
        throw new Error(error);
    }
}
