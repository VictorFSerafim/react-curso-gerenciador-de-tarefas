import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {useParams, useNavigate,  Link} from 'react-router-dom';
import {Button, Form, Jumbotron, Modal} from 'react-bootstrap';

function AtualizarTarefa(props) {

    const {id}=useParams();
    const navigate=useNavigate();

    const [exibirModal, setExibirModal]=useState(false);
    const [formValidado, setFormValidado]=useState(false);
    const [tarefa, setTarefa]=useState('');
    const [carregarTarefa, setCarregarTarefa]=useState(true);

    useEffect(()=>{
        if(carregarTarefa){
            const tarefasDB = localStorage['tarefas'];
            let tarefas =  tarefasDB ? JSON.parse(tarefasDB) : [];
            const tarefa =tarefas.filter(
                t=>t.id===parseInt(id)
            )[0];
            setTarefa(tarefa.nome);
            setCarregarTarefa(false);
        }
    },[carregarTarefa, id])

    function handleFecharModal(){
        navigate('/');        
    }

    function atualizar(event){
        event.preventDefault();
        setFormValidado(true);
        if(event.currentTarget.checkValidity()===true){

            const tarefasDB = localStorage['tarefas'];
            let tarefas =  tarefasDB ? JSON.parse(tarefasDB) : [];

            tarefas = tarefas.map(tarefaObj => {
                if(tarefaObj.id === parseInt(id)){
                    tarefaObj.nome = tarefa;
                }
                return tarefaObj;
            });
            localStorage['tarefas'] = JSON.stringify(tarefas);
            setExibirModal(true);
        }
    }

    function handleTxtTarefa(event){
        setTarefa(event.target.value);
    }

    return (
        <div>
            <h3 className="text-center">Atualizar</h3>
            <Jumbotron>
                <Form onSubmit={atualizar} noValidate validated={formValidado}>
                    <Form.Group>
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control type="text" placeholder="Digite a tarefa"
                         minLength="5" maxLength="100/" required data-testid="txt-tarefa"
                         value={tarefa} onChange={handleTxtTarefa}/>
                         <Form.Control.Feedback type="invalid">
                            A tarefa deve conter ao menos 5 caracteres.
                         </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button variant="success" type="submit" data-testid="btn-atualizar">
                            Atualizar
                        </Button>
                        &nbsp;
                        <Link to="/" className="btn btn-light">Voltar</Link>
                    </Form.Group>
                </Form>

                <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Sucesso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tarefa atualizada com sucesso!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleFecharModal}>
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Jumbotron>
        </div>
    )
}

AtualizarTarefa.propTypes = {
    id: PropTypes.number.isRequired
};

export default AtualizarTarefa;