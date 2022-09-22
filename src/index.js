import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import GerenciadorTarefas from './gerenciador-tarefas';
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <GerenciadorTarefas />  
);


