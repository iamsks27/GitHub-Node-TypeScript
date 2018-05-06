"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GithubApiService_1 = require("./GithubApiService");
const _ = require("lodash");
const githubService = new GithubApiService_1.GithubApiService();
const username = process.argv[2] ? process.argv[2] : 'shivamsingh1221';
githubService.getUserInfo(username, (user) => {
    githubService.getRepos(username, (repos) => {
        const sortedReposByForkCount = _.sortBy(repos, [(repo) => repo.forkCount]); // sort the repo array based on forkcount
        const filterdRepos = _.take(sortedReposByForkCount, 5); //take first five repos.
        user.repos = filterdRepos;
        console.log(user);
    });
});
// githubService.getRepos('shivamsingh1221', (repos: Repo[]) => {
//     console.log(repos);
// })
