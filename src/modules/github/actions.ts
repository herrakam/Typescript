import { createAsyncAction } from "typesafe-actions"
import { GithubProfile } from "../../api/github"
import { AxiosError } from "axios"

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

//비동기 작업 액션 선언
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
    )<undefined, GithubProfile, AxiosError>() // payload가 없을때는 undefined!

