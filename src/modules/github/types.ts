import { ActionType } from 'typesafe-actions'
import { GithubProfile } from '../../api/github'
import * as actions from './actions'
export type GithubAciton = ActionType<typeof actions>
export type GithubState = {
    userProfile:{
        loading:boolean
        data:GithubProfile | null
        error:Error | null
    }
}