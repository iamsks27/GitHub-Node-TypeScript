import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash';

const githubService = new GithubApiService();

const username = process.argv[2] ? process.argv[2] : 'shivamsingh1221';

githubService.getUserInfo(username, (user: User) => {
    githubService.getRepos(username, (repos: Repo[]) => {
        const sortedReposByForkCount = _.sortBy(repos, [(repo: Repo) => repo.forkCount]); // sort the repo array based on forkcount
        const filterdRepos = _.take(sortedReposByForkCount, 5); //take first five repos.
        user.repos = filterdRepos;
        console.log(user);
    });
});

// githubService.getRepos('shivamsingh1221', (repos: Repo[]) => {
//     console.log(repos);
// })