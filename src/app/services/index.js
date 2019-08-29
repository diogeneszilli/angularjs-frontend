import angular from "angular";
import ProcessoService from "./processo.service";
import UsuarioService from "./usuario.service";

export default angular
  .module("services", [])
  .service("processoService", ProcessoService)
  .service("usuarioService", UsuarioService).name;
