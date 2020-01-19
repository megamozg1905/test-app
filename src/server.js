import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { Provider as ReduxProvider } from "react-redux";
import createStore from "./store";
import { initializeSession } from "./store/actions"
import App from "./App";

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
	const store = createStore();
	store.dispatch(initializeSession());
	const jsx = (
		<ReduxProvider store={ store }>
			<App />
		</ReduxProvider>
	);
	const reactDom = renderToString(jsx);
	const reduxState = store.getState();

	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(htmlTemplate(reactDom, reduxState));
});

app.listen(2048);

function htmlTemplate(reactDom, reduxState) {
	return `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<title>React SSR</title>
		</head>

		<body>
			<div id="root">${ reactDom}</div>
			<script>
				window.REDUX_DATA = ${ JSON.stringify(reduxState)}
			</script>
			<script src="./app.bundle.js"></script>
		</body>
		</html>
	`;
}
