import React from 'react';
import './gerenciador-tarefas.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefa from './cadastrar/cadastrar-tarefa';
import AtualizarTarefa from './atualizar/atualizar-tarefa';

function GerenciadorTarefas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<ListarTarefas/>}/>
        <Route  path='/cadastrar' element={<CadastrarTarefa/>}/>
        <Route  path='/atualizar/:id' element={<AtualizarTarefa />}/>
      </Routes>
    </BrowserRouter>
    )
}

export default GerenciadorTarefas;
