import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from 'react-native-elements';
import {useNavigation} from "@react-navigation/native"
import {firebaseapp} from "../../utils/firebase"
import firebase from 'firebase'
import "firebase/firestore"
import { orderBy } from "lodash";
import ListUsuarios from "../../components/Usuarios/ListUsuarios";


const db=firebase.firestore(firebaseapp)

export default function Useradmin(props){
    const navigation = useNavigation()  
    const [infoUser, setInfoUser] = useState(null)
    const [usuarios, setUsuarios] = useState([])
    const [totalUsuarios, setTotalUsuarios] = useState(0)

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((userInfo)=>{
            setInfoUser(userInfo)
        })
    },[])

    useEffect(()=>{
        
        const resultUsuarios= []
        db.collection("usuarios").get().then((snap) =>{
            setTotalUsuarios(snap.size)
            console.log(snap)
            snap.docs.forEach((doc) => {
                // console.log(doc.id)
                const usuario = doc.data()
                usuario.id = doc.id
                console.log(usuario)
                resultUsuarios.push(usuario)
            });
            setUsuarios(resultUsuarios)
        })

            
    },[])

    
    // console.log(navigation)
    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image
                style={styles.image}
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
            />
            <Text style={styles.title}>Bienvenido Admin</Text>
            <Text style={styles.description}>
               Listado de usuarios
            </Text>
            <ListUsuarios usuarios={usuarios} />
            
            <View style={styles.viewBtn}>
                <Button
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                title="Cerrar Session"
                onPress={() => navigation.navigate("login")}
                />
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
    },
    image: {
      height: 150,
      width: "100%",
      marginBottom: 20,
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
       marginTop:50,
      alignItems: "center",
      justifyContent: "center",
    },
  });