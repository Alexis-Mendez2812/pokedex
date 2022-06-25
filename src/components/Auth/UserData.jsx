import { View, Text, StyleSheet, Button } from "react-native";
import React, { useCallback, useState } from "react";
import userAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import { getPokemonsFavoriteApi } from "../../api/favorite";

export default function UserData() {
	const { auth, logout } = userAuth();
	const [total, setTotal] = useState(0);

	useFocusEffect(
		useCallback(() => {
			(async () => {
				try {
					const response = await getPokemonsFavoriteApi();
					setTotal(size(response));
				} catch (error) {
					throw error;
				}
			})();
		},[])
	);

	return (
		<View style={styles.content}>
			<View style={styles.titleBlock}>
				<Text style={styles.title}>Bienvenido</Text>
				<Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
			</View>
			<View>
				<ItemMenu
					title="Nombre"
					text={`${auth.firstName} ${auth.lastName}`}
				></ItemMenu>
				<ItemMenu title="Username" text={auth.username}></ItemMenu>
				<ItemMenu title="Email" text={`${auth.email} `}></ItemMenu>
				<ItemMenu title="Total Favoritos" text={`${total} pokemons`}></ItemMenu>
			</View>
			<Button title="Desconectarse" onPress={logout} style={styles.btnLogo} />
		</View>
	);
}

function ItemMenu(props) {
	const { title, text } = props;
	return (
		<View style={styles.itemMenu}>
			<Text style={styles.itemMenuTitle}>{title}:</Text>
			<Text>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	content: { marginHorizontal: 20, marginTop: 20 },
	titleBlock: { marginBottom: 30 },
	title: {
		fontSize: 22,
		fontWeight: "bold",
	},
	dataContent: {
		marginBottom: 20,
	},
	itemMenu: {
		flexDirection: "row",
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderColor: "#cfcfcf",
	},
	itemMenuTitle: {
		fontWeight: "bold",
		paddingRight: 10,
		width: 120,
	},
	btnLogo: {
		paddingTop: 20,
	},
});
