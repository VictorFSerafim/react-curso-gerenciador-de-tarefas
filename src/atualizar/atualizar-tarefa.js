import React from "react";
import {useParams, Link} from 'react-router-dom';

function AtualizarTarefa() {

    // const id=useParams();
    const {id}=useParams();

    return (
        <div>
            <h1>Atualizar Tarefa {id}</h1>
        </div>
    )
}

export default AtualizarTarefa;