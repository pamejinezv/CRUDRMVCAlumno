import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloAlumno = {
    idAlumno: 0,
    nombre: "",
    appat: "",
    apmat: "",
    calificacion: 0
}



const FindAlumno = () => {
    const [searchId, setSearchId] = useState('');
    const [alumno, setAlumno] = useState(modeloAlumno);

    const findId = (e) => {
        console.log(e.target.name + ":" + e.target.value)
        setAlumno({
            ...alumno,
            [e.target.idAlumno]: e.target.value
        })

    }

    return (
     
            <ModalBody>
                <Form>
                    <FormGroup>
                    <Input name="id" placeholder="Buscar por ID..." onChange={(e) => findId(e)} alue={alumno.idAlumno} />
                    </FormGroup>
                </Form>
            </ModalBody>
       
    );
}

export default FindAlumno;