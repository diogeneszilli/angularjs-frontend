export default class ListController {
  constructor($state, usuarioService) {
    this.title = "Usuários";
    this.records = [];
    this._$state = $state;
    this._usuarioService = usuarioService;
    this.findAll();
    this.cols = [
      {
        label: "Login",
        value: "login",
        type: "text"
      },
      {
        label: "Tipo de Usuário",
        value: "tipoUsuario",
        type: "text"
      }
    ];
  }

  findAll() {
    return this._usuarioService.findAll().then(response => {
      this.records = response.records;
      return this.records;
    });
  }

  async excluir(id) {
    await this._usuarioService.remove(id);
    this._$state.reload();
  }
}

ListController.$inject = ["$state", "usuarioService"];
