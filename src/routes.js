import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";

export const ROUTES = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/profile',
		element: <Profile />
	}
]);