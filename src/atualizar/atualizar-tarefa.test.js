import React from 'react';
import  ReactDOM  from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa';


describe('teste do componente atualização de tarefas', () => {
    it('deve renderizar o projeto sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AtualizarTarefa id={1} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})

