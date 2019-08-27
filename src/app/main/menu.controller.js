export default class MenuController {
  constructor() {
    this.itens = [
      {
        state: "app.dashboard",
        icon: "icon-home",
        name: "Dashboard"
      },
      {
        state: "app.administrador",
        icon: "icon-users",
        name: "Administrador"
      },
      {
        state: "app.processo",
        icon: "icon-file",
        name: "Processos"
      },
      {
        state: "app.parecer",
        icon: "icon-file",
        name: "Pareceres"
      }
    ];
  }
}
