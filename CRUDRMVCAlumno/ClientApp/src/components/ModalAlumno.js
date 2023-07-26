import { useState, useEffect } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloAlumno = {
    idAlumno: 0,
    nombre: "",
    appat: "",
    apmat: "",
    calificacion: 0
}

const ModalAlumno = ({ mostrarAlumno, setMostrarAlumno, guardarAlumno, editar, setEditar, editarAlumno }) => {

    const [alumno, setAlumno] = useState(modeloAlumno);

    const actualizaDato = (e) => {
        console.log(e.target.name + ":" + e.target.value)
        setAlumno({
            ...alumno,
            [e.target.name]: e.target.value
        })

    }

    const enviarDatos = () => {
        if (alumno.idAlumno == 0) {
            guardarAlumno(alumno)
            cerrarAlumno()
        } else {
            editarAlumno(alumno)
            cerrarAlumno()
        }
    }

    useEffect(() => {
        if (editar != null) {
            setAlumno(editar)
        } else {
            setAlumno(modeloAlumno)
        }
  
    }, [editar])

    const cerrarAlumno = () => {
        setMostrarAlumno(!mostrarAlumno)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarAlumno}>
            <ModalHeader>
                {alumno.idAlumno == 0 ? "Nuevo Alumno" : "Editar Alumno"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={alumno.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido Paterno</Label>
                        <Input name="appat" onChange={(e) => actualizaDato(e)} value={alumno.appat} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido Materno</Label>
                        <Input name="apmat" onChange={(e) => actualizaDato(e)} value={alumno.apmat} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Calificacion</Label>
                        <Input name="calificacion" onChange={(e) => actualizaDato(e)} value={alumno.calificacion} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarAlumno}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalAlumno