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

export default function Comments(){
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione um comentário"
                />
                <TouchableOpacity
                    style={styles.btnEnter}
                >
                    <Text
                        style={styles.textEnter}
                    >
                        PUBLICAR
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#FFF'
    },
    container:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%'
    },
    input:{
        backgroundColor: '#FFF',
        color: '#222',
        fontSize: 18,
        borderColor: "rgba(212,211,211, 0.3)",
        borderTopWidth: 1,
        padding: 10,
        width: '100%'
    },
    btnEnter:{
        backgroundColor: '#35AAFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 10,
        marginBottom: 5,
        width: '100%'
    },
    textEnter:{
        color: '#FFF',
        fontSize: 18
    }
})