"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repo {
    constructor(repo) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.html_size;
        this.forkCount = repo.forks;
    }
}
exports.Repo = Repo;
