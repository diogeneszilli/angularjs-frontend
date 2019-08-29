export default class MenuController {
  constructor() {
    this.itens = [
      {
        state: "app.dashboard",
        icon: "icon-home",
        name: "Dashboard"
      },
      {
        state: "app.usuario",
        icon: "icon-users",
        name: "Usuários"
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
