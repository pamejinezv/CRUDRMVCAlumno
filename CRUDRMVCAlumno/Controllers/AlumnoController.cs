using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CRUDRMVCAlumno.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDRMVCAlumno.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        private readonly CruddbproyreactContext _dbcontext;

        public AlumnoController(CruddbproyreactContext context)
        {
            _dbcontext = context;
        }


        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Alumno> lista = await _dbcontext.Alumnos.OrderByDescending(c => c.IdAlumno).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }


        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Alumno request)
        {
            await _dbcontext.Alumnos.AddAsync(request);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");

        }
        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Alumno request)
        {
            _dbcontext.Alumnos.Update(request);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Alumno alumno = _dbcontext.Alumnos.Find(id);

            _dbcontext.Alumnos.Remove(alumno);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpGet]
        [Route("Buscar")]
        public async Task<IActionResult> Buscar(int id)
        {
            var alumno = await _dbcontext.Alumnos.FirstOrDefaultAsync(c => c.IdAlumno == id);
            return StatusCode(StatusCodes.Status200OK, alumno);
        }

    }
}

