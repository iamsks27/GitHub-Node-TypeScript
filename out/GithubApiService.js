"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const User_1 = require("./User");
const Repo_1 = require("./Repo");
const OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true //to make request to provide json response
};
class GithubApiService {
    getUserInfo(userName, cb) {
        request.get(`https://api.github.com/users/${userName}`, OPTIONS, (error, response, body) => {
            const user = new User_1.User(body);
            cb(user);
        });
    }
    getRepos(userName, cb) {
        request.get(`https://api.github.com/users/${userName}/repos`, OPTIONS, (error, response, body) => {
            const repos = body.map((repo) => new Repo_1.Repo(repo));
            cb(repos);
        });
    }
}
exports.GithubApiService = GithubApiService;
