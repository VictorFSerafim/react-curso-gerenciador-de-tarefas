import React, { useState } from "react";
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Tarefa from '../models/tarefa.model';

function CadastrarTarefa() {

    const [tarefa,setTarefa]=useState('');
    const [formValidado,setFormValidado]=useState(false);
    const [exibirModal,setExibirModal]=useState(false);

    const navigate=useNavigate();

    function cadastrar(event){
        event.preventDefault();
        setFormValidado(true);
        if(event.currentTarget.checkValidity()===true){
            //obtem as tarefas
            const tarefasDb =localStorage['tarefas'];
            const tarefas = tarefasDb ? JSON.parse(tarefasDb):[];
            //persiste a tarefa
            tarefas.push(new Tarefa(new Date().getTime(), tarefa, false));
            localStorage['tarefas']=JSON.stringify(tarefas);
            console.log(tarefas);
            setExibirModal(true);
        }
    }  

    function handleTxtTarefa(event){
        setTarefa(event.target.value);
    }    

    function handleFecharModal(){
        navigate('/');
    }

    return (
        <div>
            <h3 className="text-center">Cadastrar Tarefas</h3>
            <Jumbotron>
                <Form validated={formValidado} noValidate onSubmit={cadastrar}>
                    <Form.Group>
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control type="text" placeholder="Digite a tarefa"
                            minLength="5" maxLength="100" required value={tarefa}
                            onChange={handleTxtTarefa} />
                        <Form.Control.Feedback type="invalid">
                            A tarefa deve conter ao menos 5 caracteres
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button variant="success" type="submit" className="btn btn-success">Cadastrar</Button>
                        &nbsp;
                        <Link to="/" className="btn btn-light">Voltar</Link>
                    </Form.Group>

                    <Modal show={exibirModal} onHide={handleFecharModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sucesso</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Tarefa adicionada com sucesso!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleFecharModal}>
                                Continuar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Form>
            </Jumbotron>
        </div>
    )
}

export default CadastrarTarefa;