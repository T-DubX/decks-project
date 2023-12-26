import {Dispatch} from "redux";
import {isAxiosError} from "axios";
import {setError} from "../../app/app-reducer.ts";

type ServerError = {
    errorMessages: Array<{ field: string, message: string }>
}
export const handleError = (error: unknown, dispatch: Dispatch) => {
    let errorMassage: string
    if (isAxiosError<ServerError>(error)) {
        errorMassage = error.response ? error.response.data.errorMessages[0].message : error.message

    } else {
        errorMassage = (error as Error).message
    }
    dispatch(setError(errorMassage))
}