export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

type ActionsType = SetAppStatus | SetError

type SetAppStatus = ReturnType<typeof setAppStatus>
type SetError = ReturnType<typeof setError>
export const setAppStatus = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}

export const setError = (error: string) => {
    return {type: 'APP/SET-ERROR', error} as const
}
