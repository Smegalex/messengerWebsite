import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile/Profile";
import {Chat} from "./pages/Chat/Chat";

export const ROUTES = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/profile',
		element: <Profile />
	},
	{
		path: '/chat',
		element: <Chat />
	}
]);