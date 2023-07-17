import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Lógica para registrar al nuevo usuario
    alert("Registro exitoso:", firstName, lastName, email, password);
    // Restablecer los campos de entrada
    setFirstName("");
    setLastName("");
    setEmail("");
    setConfirmEmail("");
    setPassword("");
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setConfirmEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require("../assets/FondoAni.json")} // Ruta al archivo JSON de LottieFiles
          autoPlay
          loop
          resizeMode="cover"
          style={styles.animation}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Registrar Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar correo electrónico"
          value={confirmEmail}
          onChangeText={setConfirmEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity 
        style={styles.button} 
        onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text 
          style={styles.buttonText}
          onPress={handleCancel}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
  animation: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 1,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "white", // Color de fondo del input
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white", // Color del texto
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#5B9B72",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
