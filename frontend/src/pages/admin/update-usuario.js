import axios from "axios";
import React from "react";
import Header from "../../shared/header";

export default function UpdateUsuario() {
  function submit(event) {

    event.preventDefault()

    //1 - Desestructurar
const {nombre, apellido, cedula, correo, password, tipoDoc, telefono} = event.target

    // 2 - Crear el Body
    const body = {
      nombre: nombre.value,
      apellido: apellido.value,
      cedula: cedula.value,
      correo: correo.value,
      password: password.value,
      tipoDoc: tipoDoc.value,
      telefono: telefono.value
    }

    axios.post("", body)

    console.log(body);

    
  }

  return (
    <>
      <Header title="Crear usuario" pathName={"usuario"} path="/" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card card-primary">
                <div>
                  <div className="card-header">
                    <h3 className="card-title">Usuario</h3>
                  </div>
                  <form onSubmit={submit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="nombre">Nombres</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          name="nombre"
                          placeholder="Ejemplo: Camilo Andres"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="apellido">Apellidos</label>
                        <input
                          type="text"
                          className="form-control"
                          id="apellido"
                          name="apellido"
                          placeholder="Ejemplo: Torres Lozano"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="correo">Correo</label>
                        <input
                          type="email"
                          className="form-control"
                          id="correo"
                          name="correo"
                          placeholder="Ejemplo: camilo@mail.com"
                        />
                      </div>
                      <div className="form-group">
                        <label>Tipo de documento</label>
                        <select className="form-control" name="tipoDoc">
                          <option value={"CC"}>Cédula de ciudadanía</option>
                          <option value={"CE"}>Cédula de extrangería</option>
                          <option value={"TI"}>Tarjeta de identidad</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cedula">Cedula</label>
                        <input
                          type="number"
                          className="form-control"
                          id="cedula"
                          name="cedula"
                          placeholder="Ejemplo: 12345678"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                          type="number"
                          className="form-control"
                          id="telefono"
                          name="telefono"
                          placeholder="Ejemplo: 3161234567"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Ejemplo: Cat1235**"
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        Registrar o Modificar Usuario
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
