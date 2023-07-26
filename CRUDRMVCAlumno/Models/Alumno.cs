using System;
using System.Collections.Generic;

namespace CRUDRMVCAlumno.Models;

public partial class Alumno
{
    public int IdAlumno { get; set; }

    public string? Nombre { get; set; }

    public string? Appat { get; set; }

    public string? Apmat { get; set; }

    public double? Calificacion { get; set; }
}
