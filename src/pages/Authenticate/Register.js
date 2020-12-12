import React from 'react';
import {
    KeyboardAvoidingView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
}   from 'react-native';
import logo2 from '../../assets/logo2.png';

export default (props) => {
    return (
        <KeyboardAvoidingView style={styles.background}>
                <View style={styles.container}>
                    <Image
                        style={styles.imagem}
                        source={logo2}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        autoFocus={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Usuário"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.btnEnter}
                        onPress={() => {
                            props.navigation.navigate('Login')
                        }}
                    >
                        <Text
                            style={styles.textEnter}
                            >
                                CADASTRE-SE
                        </Text>
                    </TouchableOpacity>
                        <View style={styles.styleMsg}>
                            <Text style={styles.textMsg}>
                                Ao se cadastrar, você concorda com nossos Termos,
                                Política de Dados e Política de Cookies.
                            </Text>
                        </View>
                    <View style={styles.containerMsg}>
                        <Text
                            style={styles.textMsg}
                        >
                            Tem uma conta?
                        </Text>
                        <TouchableOpacity
                            style={styles.btnSubmit}
                            onPress={() => {
                            props.navigation.navigate('Login')
                            }}
                        >
                            <Text
                                style={styles.textSubmit}
                            >
                                Conecte-se
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    imagem:{
        marginBottom: 20
    },
    input:{
        backgroundColor: '#FFF',
        color: '#222',
        fontSize: 18,
        borderRadius: 7,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '100%'
    },
    btnEnter:{
        backgroundColor: '#35AAFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        height: 45,
        marginTop: 5,
        width: '100%'
    },
    textEnter:{
        color: '#FFF',
        fontSize: 18
    },
    containerMsg:{
        flexDirection: 'row',
      },
    textMsg:{
        color: '#222',
        fontSize: 17,
        marginTop: 20
    },
    btnSubmit:{
        marginTop: 15
    },
    textSubmit:{
        color: '#0095f6',
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5
    }
})