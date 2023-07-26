using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CRUDRMVCAlumno.Models;

public partial class CruddbproyreactContext : DbContext
{
    public CruddbproyreactContext()
    {
    }

    public CruddbproyreactContext(DbContextOptions<CruddbproyreactContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alumno> Alumnos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;DataBase=CRUDDBPROYREACT; Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alumno>(entity =>
        {
            entity.HasKey(e => e.IdAlumno);

            entity.ToTable("Alumno");

            entity.Property(e => e.IdAlumno).HasColumnName("idAlumno");
            entity.Property(e => e.Apmat)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apmat");
            entity.Property(e => e.Appat)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("appat");
            entity.Property(e => e.Calificacion).HasColumnName("calificacion");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
