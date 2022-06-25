import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	Keyboard,
	Alert,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
	const [error, setError] = useState("");
	const { login, logout } = useAuth();

    
	const formik = useFormik({
        initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (formValue) => {
            const { username, password } = formValue;
			if (username !== user.username || password !== user.password) {
                console.log("el usuario o la contraseña no son correctos");
				setError("el usuario o la contraseña no son correctos");
			} else {
                login(userDetails)
			}
		},
	});

	return (
		<View>
			<Text style={styles.title}>Iniciar sesión</Text>
			<TextInput
				style={styles.input}
				placeholder="Nombre de ususario"
				autoCapitalize="none"
				value={formik.values.username}
				onChangeText={(text) => formik.setFieldValue("username", text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				autoCapitalize="none"
				secureTextEntry={true}
				value={formik.values.password}
				onChangeText={(text) => formik.setFieldValue("password", text)}
			/>
			<Button title="Entrar" onPress={formik.handleSubmit} />
			<Text style={styles.error}>{formik.errors.username} </Text>
			<Text style={styles.error}>{formik.errors.password} </Text>
			<Text style={styles.error}>{error} </Text>
		</View>
	);
}

function validationSchema() {
	return {
		username: Yup.string().required("El usuario es obligatorio"),
		password: Yup.string().required("La Password es obligatoria"),
	};
}
function initialValues() {
	return {
		username: "",
		password: "",
	};
}

const styles = StyleSheet.create({
	title: {
		textAlign: "center",
		fontSize: 28,
		fontWeight: "bold",
		marginTop: 50,
		marginBottom: 15,
	},
	input: {
		height: 40,
		margin: 12,
		borderRadius: 10,
		padding: 10,
		borderWidth: 1,
	},
	error: {
		textAlign: "center",
		color: "#f00",
		marginTop: 20,
	},
});
