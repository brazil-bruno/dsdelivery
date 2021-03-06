//import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Header from "../Header";

export default function Home() {
  //const navigation = useNavigation();

  const handleOnPress = () => {
    //navigation.navigate('Orders')
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image source={require("../assets/deliveryman.png")} />
        <Text style={styles.title}>
          Track orders and {"\n"} deliver on time!
        </Text>
        <Text style={styles.subTitle}>
          Receive all your restaurant orders in the palm of your {"\n"} hand
        </Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress} >
            <Text style={styles.buttonText}>SEE ORDERS</Text>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    alignItems: "center",
  },
  title: {
    color: "#263238",
    fontSize: 26,
    lineHeight: 35,
    fontWeight: "bold",
    marginTop: 31,
    textAlign: "center",
  },
  subTitle: {
    color: "#9E9E9E",
    fontSize: 16,
    marginTop: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  footer: {
    marginTop: "5%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#DA5C5C",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFF",
    letterSpacing: -0.24,
  },
});
