import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import AppBar from "./AppBar";
import Repository from "./Repository";
import RepositoryList from "./RepositoryList";
import Review from "./Review";
import SignIn from "./SignIn";

import theme from "../theme";

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.grayLight,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<Routes>
				<Route path="/" element={<RepositoryList />} exact />
				<Route path="/review" element={<Review />} exact />
				<Route path="/signin" element={<SignIn />} exact />
				<Route path="/repository/:id" element={<Repository />} exact />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</View>
	);
};

export default Main;
