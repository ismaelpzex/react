import React from "react";
import ReactDOM from "react-dom/client";

import './styles.css'

import { App } from "./HelloWordApp";
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={3} />
    </React.StrictMode>
)