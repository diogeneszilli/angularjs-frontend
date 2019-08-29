export default class ListController {
  constructor($state, usuarioService, processoService) {
    this._$state = $state;
    this._usuarioService = usuarioService;
    this._processoService = processoService;
    this.processos = [];
    this.usuarios = [];
    this.title = "Pareceres Pendentes";
    this._$state = $state;
    this._processoService = processoService;
    this.findAllUsuarios();
    this.cols = [
      {
        label: "Código do Processo",
        value: "id",
        type: "text"
      }
    ];
  }

  buscar(pesquisa) {
    this.processos = [];
    this.findByPesquisa(pesquisa);
  }

  findAllUsuarios() {
    return this._usuarioService.findAll().then(response => {
      this.usuarios = response.records;
      return this.usuarios;
    });
  }

  findByPesquisa(id) {
    return this._processoService
      .findParecerPendenteByUserId(id)
      .then(response => {
        this.processos = response.records;
        return this.processos;
      });
  }
}

ListController.$inject = ["$state", "usuarioService", "processoService"];
