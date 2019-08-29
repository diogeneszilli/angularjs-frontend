import ListController from "./list.controller";
import FormController from "./form.controller";

export const usuarioConfig = $stateProvider => {
  $stateProvider
    .state("app.usuario", {
      template: require("@views/default.html"),
      url: "usuario",
      redirectTo: "app.usuario.list"
    })
    .state("app.usuario.list", {
      template: require("@views/usuario/list.html"),
      url: "/list",
      controller: ListController,
      controllerAs: "vm"
    })
    .state("app.usuario.new", {
      template: require("@views/usuario/form.html"),
      url: "/new",
      controller: FormController,
      controllerAs: "vm"
    })
    .state("app.usuario.edit", {
      template: require("@views/usuario/form.html"),
      url: "/{id}",
      controller: FormController,
      controllerAs: "vm"
    });
};

usuarioConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
