import {ImageBackground, StatusBar, StyleSheet, Text, TextInput,TouchableOpacity,View } from "react-native";


export function Funding() {
    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.waltex}>FUND WALLET</Text>
            </View>
            <TextInput style={{marginTop: 50,padding: 5, borderWidth: 2, marginLeft: 15, marginRight: 15}} placeholder="Amount"/>
            <View style={{marginTop: 30, }}>
                <TouchableOpacity style={styles.btn}>
                    <Text>Bank Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>Pay Via Card</Text>
                </TouchableOpacity>
            </View>
                
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        alignItems: "center",
        backgroundColor: "skyblue",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    waltex: {
        textAlign: "center",
        marginTop: "auto",
        fontWeight: "bold",
        fontSize: 40,
        color:"black"
    },
    btn:{
        backgroundColor: "white",
        borderWidth: 1,
        backgroundColor: "skyblue",
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
        marginTop:15
    }
})
