import ReactDOM from "react-dom/client";
import React from "react";
import {IOCContainer} from "@makechtec/ioc-container/dist/core/IOCContainer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ROUTES} from "../../../routes/routes";

export class UIDrawer {

    public constructor(private container: IOCContainer) {
    }

    public startUI() {

        const rootElement = document.getElementById("root");

        if (rootElement === null || rootElement === undefined) {
            console.log("Not found root element with selector: #root");
            return;
        }

        const reactRoot = ReactDOM.createRoot(rootElement);


        reactRoot.render(<RouterProvider router={createBrowserRouter(ROUTES)}/>);
    }

}