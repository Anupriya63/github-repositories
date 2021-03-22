import {
    SET_REPOS,
    REPO_API_REQUEST_FAILURE,
    REPO_API_RESPONSE_NOT_FOUND
} from './repoTypes';
import { RepoResponse, RepoErrorResponse, NotFoundResponse } from '../../models/reposResponse';

export const setRepos = (repoResponse: RepoResponse[]) => {
    return {
        type: SET_REPOS,
        payload: repoResponse,
    };
};

export const repoApiRequestFailure = (error: RepoErrorResponse) => {
    return {
        type: REPO_API_REQUEST_FAILURE,
        payload: error,
    };
};

export const repoApiResponseNotFound = (error: NotFoundResponse) => {
    return {
        type: REPO_API_RESPONSE_NOT_FOUND,
        payload: error,
    };
};