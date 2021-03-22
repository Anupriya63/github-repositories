import axios from 'axios';
import { RepoResponse } from '../models/reposResponse';
import store from '../store/store';

axios.defaults.baseURL = 'https://api.github.com/';

axios.interceptors.request.use(
    request => {
        request.headers['Accept'] = 'application/vnd.github.v3+json';
        return request;
    }
);

axios.interceptors.response.use(
    response => {
        let responsePayload;
        if(response.status === 200 || response.status === 201){
            responsePayload =  response.data
                .map((rawData: any) => ({
                    repoName: rawData.name,
                    description: rawData.description,
                    totalStargazers: rawData.stargazers_count,
                    totalWatchers: rawData.watchers_count,
                    repoLink: rawData.svn_url,
                })
                );
        }
        return responsePayload;
    }, 
    error => {
        if(error.response.status === 404){
            store.dispatch({type: 'REPO_API_RESPONSE_NOT_FOUND', payload: true});
            return;
        } else {
            store.dispatch({type: 'REPO_API_REQUEST_FAILURE', payload: error.response.data.message});
            return;
        }
    }
);


export const getRepolist = async(orgName: string, sortBy?: string) => {
    const apiPath = `orgs/${orgName}/repos`;
    const url = `${apiPath}`;
    const queryParams = {
        sort: sortBy,
        direction: 'desc',
        page: 1
    };
    try {
        return await axios.get<RepoResponse[]>(url, {
            params: queryParams,
        });
    } catch (error) {
        store.dispatch({type: 'REPO_API_REQUEST_FAILURE', payload: error.response.data.message});
        return;
    }
};
