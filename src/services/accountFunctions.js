import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_KEY } from "@env"

export const isLogin = async () => {
    try {
      return await AsyncStorage.getItem("key") === LOGIN_KEY;
    } catch (e) { console.log(e); }
};

export const signUp = async (username, password, password2) => {
    const usernameCharsBanned = [""];
    const passwordCharsRequired = [""];

    const usernameCharBannedFound = false;
    const nPasswordCharRequired = 0;

    try {
        usernameCharsBanned.forEach(char => {
            if (username.includes(char)) {
                usernameCharBannedFound = true;
                
            }
        });

        passwordCharsRequired.forEach(char => {
            if (password.includes(char)) {
                nPasswordCharRequired++;
            }
        });

        if (password === password2) {
            if (usernameCharBannedFound) {
                console.log("El nombre de usuario es incorrecto")
            } else {
                if (nPasswordCharRequired === passwordCharsRequired.length) {
                    await AsyncStorage.setItem("username", username);
                    await AsyncStorage.setItem("password", password);
                } else {
                    console.log("La contraseña es incorrecta")
                }
            }
        } else {
            console.log("Las contraseñas no coinciden");
        }
                    
       
    } catch (e) { console.log(e); }
};

export const logIn = async () => {
    try {
        const username = await AsyncStorage.getItem("username");
        const password = await AsyncStorage.getItem("password");

        if (username === "Admin" && password === "God") {
            console.log("Ha iniciado sesión");
        } else {
            console.log("Error al iniciar sesion");
        }


    } catch (e) { console.log(e); }
};