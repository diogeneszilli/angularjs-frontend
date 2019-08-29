export default class ListController {
  constructor($state, processoService) {
    this.records = [];
    this.title = "Processos";
    this._$state = $state;
    this._processoService = processoService;
    this.findAll();
    this.cols = [
      {
        label: "Código do Processo",
        value: "id",
        type: "text"
      }
    ];
  }

  findAll() {
    return this._processoService.findAll().then(response => {
      this.records = response.records;
      return this.records;
    });
  }
}

ListController.$inject = ["$state", "processoService"];
