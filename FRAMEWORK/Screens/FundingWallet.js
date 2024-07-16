import { FontAwesome5, FontAwesome6, } from "@expo/vector-icons";
import {StatusBar, StyleSheet, Text,TouchableOpacity,View } from "react-native";


export function FundingWallet() {
    return (
        <View style={{ flex:1,marginTop: StatusBar.currentHeight}}>
            <View style={styles.container}>
                <Text style={styles.wallet}> FUNDING WALLET</Text>
                <View style={styles.View}>
                    <TouchableOpacity>
                        <Text >wallet balance <FontAwesome5 name="eye-slash" size={13} /> </Text>
                    </TouchableOpacity>
                    <Text style={styles.num}><FontAwesome6 name="naira-sign" size={20}/> 0.00</Text>
                </View>
                <Text style={styles.select}>Select Method</Text>
            <TouchableOpacity style={styles.btn}>
                <Text>Bank Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text>Debit Card</Text>
            </TouchableOpacity>
                
            </View>
            
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,

    },
    View:{
        backgroundColor: "#aaf0aa"
    },
    num:{
        fontSize: 25
    },
    wallet: {
        fontWeight: "bold",
        fontSize: 25,
    },
    btn:{
        marginTop:30,
        backgroundColor: "#aaf0aa",
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        // alignItems:"center",
        padding:40
    },
    select:{
        marginTop:20,
        fontSize: 20
    }, 
})
