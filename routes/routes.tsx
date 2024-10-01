import React from "react";
import {redirect, RouteObject} from "react-router-dom";
import {Home} from "../pages/Home";

export const ROUTES: RouteObject[] = [
    {
        path: "/",
        element: <Home/>
    },
];