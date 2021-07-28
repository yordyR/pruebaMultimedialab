import React from "react"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from 'react-native-elements';
import {useNavigation} from "@react-navigation/native"
import firebase from 'firebase'

export default function UserLogged(props){
    const navigation = useNavigation()  
    
    console.log(navigation)
    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image
                style={styles.image}
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
            />
            <Text style={styles.title}>Bienvenido Usuario</Text>
            <Text style={styles.description}>
               Gracias por ingresar
            </Text>
            <View style={styles.viewBtn}>
                <Button
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                title="Cerrar Sesion"
                onPress={() => firebase.auth().signOut() }
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