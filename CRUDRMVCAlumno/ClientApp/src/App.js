import { useEffect, useState } from "react"
import TablaAlumnos from "./components/TablaAlumnos"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalAlumno from "./components/ModalAlumno"
import FindAlumno from "./components/FindAlumno"



const App = () => {
    const [alumnos, setAlumnos] = useState([])
    const [mostrarAlumno, setMostrarAlumno] = useState(false)
    const [editar, setEditar] = useState(null)
    const [searchId, setSearchId] = useState(null);
 
   
    const mostrarAlumnos = async (id) => {
        const response = await fetch("api/Alumno/Listar");
        if (response.ok) {
            const data = await response.json();
            setAlumnos(data)
        } else {
            console.log("Error en los datos de la lista")
        }
    }

    const buscarAlumnos = async(id) => {
    const response = await fetch("api/Alumno/Buscar" + id);
        if (response.ok) {
            const data = await response.json();
           setAlumnos(data);
            
        } else {
            console.log("Error en la busqueda")
        }
    }
  
    useEffect(() => {
        buscarAlumnos()
       // mostrarAlumnos()
    }, [])

    const handleSearch = () => {
        mostrarAlumnos(searchId);
    };

    const guardarAlumno = async (alumno) => {
        const response = await fetch("api/Alumno/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset= utf-8'

            },
            body: JSON.stringify(alumno)
        })
        if (response.ok) {
            setMostrarAlumno(!mostrarAlumno);
            mostrarAlumnos();
        }
    }

    const editarAlumno = async (alumno) => {
        const response = await fetch("api/Alumno/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset= utf-8'

            },
            body: JSON.stringify(alumno)
        })
        if (response.ok) {
            setMostrarAlumno(!mostrarAlumno);
            mostrarAlumnos();
        }
    }
    const eliminarAlumno = async (id) => {
        var respuesta = window.confirm("Desea eliminar el alumno?")
        if (!respuesta) {
            return;
        }
        const response = await fetch("api/Alumno/Eliminar/" + id, {
            method: 'DELETE'
        })  
        if (response.ok) {
            mostrarAlumnos();
        }
    }


    return (

        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Buscar Alumnos</h5>
                            
                        </CardHeader>
                        <CardBody>
                        <FindAlumno
                            searchId ={searchId}
                            setSearchId={setSearchId}
                        />
                       
                            <Button size="sm" color="success" onClick={() => handleSearch}>Buscar</Button>
                        </CardBody>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarAlumno(!mostrarAlumno)}>Nuevo alumno</Button>
                            <hr></hr>
                            <TablaAlumnos data={alumnos}
                                setEditar={setEditar}
                                mostrarAlumno={mostrarAlumno}
                                setMostrarAlumno={setMostrarAlumno}
                                eliminarAlumno={eliminarAlumno}
                            />
                        </CardBody>

                    </Card>
                </Col>
            </Row>
            <ModalAlumno

                mostrarAlumno={mostrarAlumno}
                setMostrarAlumno={setMostrarAlumno}
                guardarAlumno={guardarAlumno}
                editar={editar}
                setEditar={setEditar}
                editarAlumno={editarAlumno}
            />

        </Container>
    )
}
export default App;