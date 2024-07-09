import {ImageBackground, StyleSheet, Text, TextInput,TouchableOpacity,View } from "react-native";


export function Funding() {
    return (
        <View style={{flex: 1,}}>
            <ImageBackground source={require("../assets/blue.jpg")} style={{flex: 1}}>
                <View style={styles.wallet}>
                    <Text style={styles.waltex}>WALLET</Text>
                </View>
                <TextInput style={{marginTop: 50,padding: 5, borderWidth: 2, marginLeft: 15, marginRight: 15}} placeholder="Amount"/>
                <Text style={{marginTop: 30, fontSize: 20,color: "white" }}>Payment Method</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{fontSize: 18}}>Bank Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>Pay Via Card</Text>
                </TouchableOpacity>
            </ImageBackground>
           
        </View>
    )
}

const styles = StyleSheet.create({
    wallet: {
        backgroundColor: "skyblue",
        height: 130,
        alignItems: "center",
    },
    waltex: {
        textAlign: "center",
        marginTop: "auto",
        fontWeight: "bold",
        fontSize: 30
    },
    btn:{
        backgroundColor: "white",
        padding: 40,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        marginTop: 50,
    }
})
