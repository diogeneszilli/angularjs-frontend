export default class ListController {
  constructor($state, $stateParams, usuarioService, processoService) {
    this._$state = $state;
    this._id = $stateParams.id;
    this._usuarioService = usuarioService;
    this._processoService = processoService;
  }
}

ListController.$inject = [
  "$state",
  "$stateParams",
  "usuarioService",
  "processoService"
];
