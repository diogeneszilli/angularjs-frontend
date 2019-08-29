import ListController from "./list.controller";
import FormController from "./form.controller";

export const processoConfig = $stateProvider => {
  $stateProvider
    .state("app.processo", {
      template: require("@views/default.html"),
      url: "processo",
      redirectTo: "app.processo.list"
    })
    .state("app.processo.list", {
      template: require("@views/processo/list.html"),
      url: "/list",
      controller: ListController,
      controllerAs: "vm"
    })
    .state("app.processo.new", {
      template: require("@views/processo/form.html"),
      url: "/new",
      controller: FormController,
      controllerAs: "vm"
    })
    .state("app.processo.view", {
      template: require("@views/processo/form.html"),
      url: "/{id}",
      controller: FormController,
      controllerAs: "vm"
    });
};

processoConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
