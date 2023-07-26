import { Table, Button } from "reactstrap"
const TablaAlumnos = ({ data, setEditar, mostrarAlumno, setMostrarAlumno, eliminarAlumno }) => {
    const enviarDatos = (alumno) => {
        setEditar(alumno)
        setMostrarAlumno(!mostrarAlumno)
    }
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Calificacion</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colspan="4">Sin registros </td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.idAlumno}>
                                <td>{item.idAlumno}</td>
                                <td>{item.nombre}</td>
                                <td>{item.appat}</td>
                                <td>{item.apmat}</td>
                                <td>{item.calificacion}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={()=> eliminarAlumno(item.idAlumno) }>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )

                }
            </tbody>
        </Table>
    )
}
export default TablaAlumnos