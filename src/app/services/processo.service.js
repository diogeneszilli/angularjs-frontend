export default class ProcessoService {
  constructor($http) {
    this.http = $http;
    this.url = "http://localhost:8090/api/processos";
  }

  findParecerPendenteByUserId(id) {
    return this.http
      .get(this.url + "/parecer-pendente/" + id)
      .then(function(response) {
        return response.data;
      });
  }

  findById(id) {
    return this.http.get(this.url + "/" + id).then(function(response) {
      return response.data;
    });
  }

  findAll() {
    return this.http.get(this.url).then(function(response) {
      return response.data;
    });
  }

  insert(registro) {
    return this.http.post(this.url, registro).then(function(response) {
      return response.data;
    });
  }

  update(registro) {
    return this.http
      .put(this.url + "/" + registro.id, registro)
      .then(function(response) {
        return response.data;
      });
  }
}

ProcessoService.$inject = ["$http"];
