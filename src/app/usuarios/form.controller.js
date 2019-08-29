export default class FormController {
  constructor($state, $stateParams, usuarioService) {
    this.record = {};
    this.tipoUsuario = {};
    this.tipoUsuario.tipo = "Finalizador";

    this.tiposUsuario = [
      {
        id: 1,
        tipo: "Administrador"
      },
      {
        id: 2,
        tipo: "Triador"
      },
      {
        id: 3,
        tipo: "Finalizador"
      }
    ];

    this._$state = $state;
    this._id = $stateParams.id;
    this._usuarioService = usuarioService;
    if (this._id) {
      this.findById();
    }
  }

  async save() {
    this.record.tipoUsuario = this.tipoUsuario.tipo;
    if (this._id) {
      await this._usuarioService.update(this.record);
    } else {
      await this._usuarioService.insert(this.record);
    }
    this._$state.go("app.usuario.list");
  }

  findById() {
    return this._usuarioService.findById(this._id).then(response => {
      this.record = response;
      this.record.senha = null;
      return this.record;
    });
  }
}

FormController.$inject = ["$state", "$stateParams", "usuarioService"];
