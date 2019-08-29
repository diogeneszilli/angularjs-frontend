export default class FormController {
  constructor($state, $stateParams, usuarioService, processoService) {
    this._$state = $state;
    this._id = $stateParams.id;
    this._usuarioService = usuarioService;
    this._processoService = processoService;
  }
}

FormController.$inject = [
  "$state",
  "$stateParams",
  "usuarioService",
  "processoService"
];
