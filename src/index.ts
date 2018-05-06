import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

const githubService = new GithubApiService();
githubService.getUserInfo('shivamsingh1221', (user: User) => {
    console.log(user);
});

githubService.getRepos('shivamsingh1221', (repos: Repo[]) => {
    console.log(repos);
})