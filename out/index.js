"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GithubApiService_1 = require("./GithubApiService");
const githubService = new GithubApiService_1.GithubApiService();
githubService.getUserInfo('shivamsingh1221', (user) => {
    console.log(user);
});
githubService.getRepos('shivamsingh1221', (repos) => {
    console.log(repos);
});
