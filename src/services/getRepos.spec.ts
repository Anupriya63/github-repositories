import axios from 'axios';
import { RepoResponse } from '../models/reposResponse';
jest.mock('axios');
import { getRepolist } from './getRepos';
const mockedAxios = axios as jest.Mocked<typeof axios>;
const apiPath = 'orgs/vanilla/repos';

const reposMock: RepoResponse[] = [{
    repoName: 'smarty',
    description: 'Smarty is a template engine for PHP, facilitating the separation of',
    totalStargazers: 8,
    totalWatchers: 9,
    repoLink: 'https://github.com/vanilla/smarty',
},
{
    repoName: 'smarty2',
    description: 'Smarty is a template engine for PHP, facilitating the separation of',
    totalStargazers: 5,
    totalWatchers: 6,
    repoLink: 'https://github.com/vanilla/smarty',
},
];

describe('Repo API methods', () => {
    describe('getRepolist method', () => {
        it('should make an async GET request to the repository endpoint', done => {
            mockedAxios.get.mockRejectedValue({
                data: {},
            });
            mockedAxios.get.mockResolvedValue({
                data: {
                    repos: [],
                },
            });
            getRepolist( 'vanilla', 'star')
                .then(response => {
                    expect(response).toEqual({
                        repos: reposMock,
                    });
                })
                .catch(rejected => {
                    expect(rejected).toEqual({
                        error: 'Something Went wrong',
                    });
                })
                .finally(() => {
                    expect(mockedAxios.get).toHaveBeenCalledWith(`${apiPath}`, {
                        params: {'direction': 'desc', 'page': 1, 'sort': 'star'}  
                    });
                    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
                    done();
                });
        });

        it('should return 404 not found', done => {
            mockedAxios.get.mockRejectedValue({
                data: {},
            });
            mockedAxios.get.mockResolvedValue({
                data: {
                    repos: [],
                },
            });
            getRepolist( 'search', 'full_name' )
                .then(response => {
                    expect(response).toEqual({
                        repos: [],
                    });
                })
                .catch(rejected => {
                    expect(rejected).toEqual({
                        error: 'Not Found',
                    });
                })
                .finally(() => {
                    expect(mockedAxios.get).toHaveBeenCalledWith('orgs/search/repos', {
                        params: {'direction': 'desc', 'page': 1, 'sort': 'full_name'}  
                    });
                    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
                    done();
                });
        });
    });
});