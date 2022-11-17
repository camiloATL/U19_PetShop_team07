import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, Toast } from "../../config/constants";
import Header from "../../shared/header";

export default function Usuarios() {
  const token = localStorage.getItem("token");

  const [usuarios, setUsuarios] = useState(null);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    axios
      .get(BASE_URL + "/usuario", { headers: { Authorization: token } })
      .then((res) => {
        setUsuarios(res.data);
      })
      .catch();

    return () => {};
  }, [reload, token]);

  function borrarUsuario(event) {
    const { id } = event.target;

    // BORRAR EL USUARIO
    axios
      .delete(BASE_URL + "/usuario", {
        data: { id },
        headers: { Authorization: token },
      })
      .then((res) => {
        setReload( !reload )
        Toast.fire({ icon: "warning", title: "Se borro el usuario" });
      })
      .catch((err) => {
        Toast.fire({
          icon: "error ",
          title: "Hubo un error al borrar el usuario",
        });
      });
  }

  return (
    <>
      <Header title={"Lista de usuarios"} path="usuarios" pathName="Usuarios" />
      <section className="content">
        <div className="container-fluid"></div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">Tabla de Usuarios</div>
              <div className="card-body">
                <table
                  id="example2"
                  className="table table-bordered table-hover dataTable dtr-inline"
                  aria-describedby="example2_info"
                >
                  <thead>
                    <tr>
                      <th
                        className="sorting sorting_asc"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                      >
                        Tipo documento
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                      >
                        Número Documento
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                      >
                        Nombres
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                      >
                        Apellidos
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                      >
                        Correo
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                      >
                        Teléfono
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                      >
                        Opciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios &&
                      usuarios.map((usuario) => (
                        <tr key={usuario._id}>
                          <td>{usuario.tipoDoc}</td>
                          <td>{usuario.cedula}</td>
                          <td>{usuario.nombre}</td>
                          <td>{usuario.apellido}</td>
                          <td>{usuario.correo}</td>
                          <td>{usuario.telefono}</td>
                          <td>
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Opciones"
                            >
                              <button
                                id={usuario._id}
                                type="button"
                                className="btn btn-danger"
                                onClick={borrarUsuario}
                              >
                                Eliminar
                              </button>
                              <Link
                                type="button"
                                className="btn btn-success"
                                to={"/admin/usuario/" + usuario._id}
                              >
                                Actualizar
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
