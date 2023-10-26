import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_KEY } from "@env"

export const isLogin = async () => {
    try {
      return await AsyncStorage.getItem("key") === LOGIN_KEY;
    } catch (e) {}
};

export const logIn = async (inputUsername, inputPassword) => {
    try {
        const username = "admin";
        const password = "admin2324";
        
        if (result = inputUsername === username && password === inputPassword) {
            await AsyncStorage.setItem("key", LOGIN_KEY);
        }

        return result;

    } catch (e) {}
};

export const logOut = async () => {
    try {
        await AsyncStorage.setItem("key", "");
    } catch (e) {}
};