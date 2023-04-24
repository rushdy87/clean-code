// (c) Maximilian Schwarzmüller / Academind GmbH
// Created in 2020

let sqlDriver;
let mongoDbDriver;

class DatabaseAdapter {
  #dbEngine;

  loadDatabaseDriver(engine) {
    if (engine === 'sql') {
      this.#dbEngine = sqlDriver;
    } else {
      this.#dbEngine = mongoDbDriver;
    }
  }

  connect() {
    this.#dbEngine.tryConnect();
  }

  insertData(data) {
    this.#dbEngine.insert(data);
  }

  findOne(id) {
    // Todo: Needs to be implemented
  }
}
