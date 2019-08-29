import ListController from "./list.controller";
import FormController from "./form.controller";

export const parecerConfig = $stateProvider => {
  $stateProvider
    .state("app.parecer", {
      template: require("@views/default.html"),
      url: "parecer",
      redirectTo: "app.parecer.list"
    })
    .state("app.parecer.list", {
      template: require("@views/parecer/list.html"),
      url: "/list",
      controller: ListController,
      controllerAs: "vm"
    })
    .state("app.parecer.edit", {
      template: require("@views/parecer/form.html"),
      url: "/{id}/{idUsuario}",
      controller: FormController,
      controllerAs: "vm"
    });
};

parecerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
