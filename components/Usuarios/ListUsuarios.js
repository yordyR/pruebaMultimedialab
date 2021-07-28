import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { size } from 'lodash';
import { Avatar } from 'react-native-elements';

export default function ListUsuarios(props){
    const {usuarios} = props;
    
    return (
        <View>
            {
                size(usuarios) >0 ? (
                    <FlatList 
                        data={usuarios}
                        renderItem={(usuario) =><Usuario usuario={usuario} />}
                        keyExtractor={(item, index) => index.toString() }
                    />
                ) : (
                    <View style={styles.loaderUsuarios} >
                        <ActivityIndicator size="large" />
                        <Text>
                            Cargando Usuarios
                        </Text> 
                    </View>
                )
            }
            <Text></Text>
        </View>
    )
}

function Usuario(props){
    const {usuario} = props
    const {nombre, password, id} = usuario.item

    const verUsuario = () => {
        console.log("OK")
    }


    return (
        <TouchableOpacity onPress={verUsuario}>
            <View style={styles.viewUsuario}>
                <Avatar
                rounded
                icon={{name: 'user', color: 'gray', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{marginright: 10, marginTop: 20, width: 100}}
                />  
                <View>
                    <Text style={styles.usuarioName}>Usuario: {nombre}</Text>
                    <Text style={styles.usuarioPasword}>Password: {password}</Text>
                    <Text style={styles.usuarioPasword}>Id: {id}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    loaderUsuarios:{
        marginTop: 20,
        marginBottom: 50,
        alignItems: "center"
    },
    viewUsuario:{
        flexDirection: "row",
        margin: 10
    },
    viewUsuarioImage:{
        marginRight:15
    },
    usuarioName:{
        fontWeight: "bold",
        alignSelf: "center"
    },  
    usuarioPasword:{
        paddingTop:2,
        color: "grey"
    }

})