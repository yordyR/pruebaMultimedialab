import React, { useRef, useState } from 'react'
import {useNavigation} from "@react-navigation/native"
import { Alert, Modal, StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button, Tooltip } from 'react-native-elements'
import { isEmpty } from 'lodash'
import firebase from 'firebase'


export default function LoginForm(){
    const navigation = useNavigation()
    const [formData, setFormData] = useState({usuario:"", password:""})
    const [alerta, setAlerta] = useState("");
    console.log(formData)

    const onChange = (e, type) =>{
        console.log(e)
        setFormData({
            ...formData, [type]: e.nativeEvent.text
        })
    }

    const onSubmit = () =>{
        console.log(formData)

        if(isEmpty(formData.usuario) || isEmpty(formData.password)){
            setAlerta("todos los campos son obligatorios")
        }else{
            firebase.auth().signInWithEmailAndPassword(formData.usuario, formData.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user.refreshToken)
                setAlerta("datos correctos")
                navigation.navigate("AccountStack") 
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                
                setAlerta(error.message)
            });
        }

    }

    return(
        <View style={styles.formContainer}>
           
            <Input 
                placeholder="usuario o correo"
                onChange={(e)=> onChange(e, "usuario")}
                value= {formData.usuario}
                containerStyle={styles.inputForm}
            />
            <Input 
                placeholder="Contraseña"
                onChange={(e)=> onChange(e, "password")}
                containerStyle={styles.inputForm}
                value={formData.password}
                password={true}
                secureTextEntry={true}
            />
            <Text style={styles.alerta}>
                {alerta}
            </Text>
            <Button 
                title="Iniciar Sesion"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLoggin}
                onPress={()=> onSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    alerta:{
        color: "#e63c3c"
    },
    formContainer:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    inputForm:{
        width: "100%",
        marginTop: 20
    },
    btnContainerLogin:{
        width: "90%",
        marginTop: 30
    },
    btnLoggin:{
        backgroundColor:"#0b88ee"
    }
})