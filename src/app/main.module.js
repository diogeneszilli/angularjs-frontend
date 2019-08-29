import angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import diretivas from "./diretivas";
import services from "./services";

import { mainConfig } from "./main/config";
import { usuarioConfig } from "./usuarios/config";
import { processoConfig } from "./processos/config";
import { parecerConfig } from "./pareceres/config";

export default angular
  .module("app", [uiRouter, diretivas, services])
  .config(mainConfig)
  .config(usuarioConfig)
  .config(processoConfig)
  .config(parecerConfig).name;
