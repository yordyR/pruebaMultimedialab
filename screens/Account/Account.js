import React, {useState, useEffect} from "react"
import {useNavigation} from "@react-navigation/native"
import firebase from 'firebase'
import UserLogged  from "./UserLogged"
import Useradmin from "./UserAdmin"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from 'react-native-elements';


export default function Login(){
  const navigation = useNavigation()  
  const [login, setlogin] = useState(null)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) =>{
      console.log(user)

      setlogin(user)
      // !user ? setlogin(false) : setlogin(true)
      
      
    })
  },[])


  console.log(login)
  if(login === null){ 
    return (
      <ScrollView centerContent={true} style={styles.viewBody}>
        <Image
            style={styles.image}
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
        />
        <Text style={styles.title}>Consulta tu perfil</Text>
        <Text style={styles.description}>
          Ingresa para conocer mas informacion de tu cuenta
        </Text>
        <View style={styles.viewBtn}>
            <Button
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            title="Iniciar Sesion"
            onPress={() => navigation.navigate("login")}
            />
        </View>
    </ScrollView>
    )
  }{
    if(login.email === "usuario@usuario.com"){
      return <UserLogged />
    }else if(login.email === "admin@admin.com"){
      return <Useradmin />
    }
  }
  

  return (
    <h1>Cargando</h1>
  )


}
const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
    },
    image: {
      height: 250,
      width: "100%",
      marginBottom: 40,
    },
    title: {
      fontWeight: "bold",
      fontSize: 19,
      marginBottom: 10,
      textAlign: "center",
    },
    description: {
      textAlign: "center",
      marginBottom: 20,
    },
    btnStyle: {
      backgroundColor: "#0b88ee",
    },
    btnContainer: {
      width: "70%",
    },
    viewBtn: {
      alignItems: "center",
      justifyContent: "center",
    },
  });