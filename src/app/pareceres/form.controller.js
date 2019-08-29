export default class FormController {
  constructor($state, $stateParams, processoService) {
    this.title = "Parecer";
    this.record = {};
    this.parecer = {};
    this._$state = $state;
    this._id = $stateParams.id;
    this._idUsuario = $stateParams.idUsuario;
    this._processoService = processoService;
    this.findById();
  }

  async save() {
    let index = this.record.pareceres.findIndex(
      parecer => parecer.usuario.id == this._idUsuario
    );
    this.record.pareceres[index].descricao = this.parecer.descricao;
    this.record.pareceres[index].pendente = false;
    await this._processoService.update(this.record);
    this._$state.go("app.parecer.list");
  }

  findById() {
    return this._processoService.findById(this._id).then(response => {
      this.record = response;

      let index = this.record.pareceres.findIndex(
        parecer => parecer.usuario.id == this._idUsuario
      );
      this.parecer.descricao = this.record.pareceres[index].descricao;
      this.parecer.pendente = this.record.pareceres[index].pendente;
      this.parecer.usuario = this.record.pareceres[index].usuario;

      return this.record;
    });
  }
}

FormController.$inject = ["$state", "$stateParams", "processoService"];
