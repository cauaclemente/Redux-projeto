import { all, takeEvery, call, put} from "redux-saga/effects";
import { fetchUsersSucces, fetchUsersFailure} from "./Slice"

import axios from "axios";

function* fetchUsers() {
    try {

        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSucces(response.data))

    }catch(error){
        yield put(fetchUsersFailure(error.message))
    }
}

export default all([
    takeEvery("user/fetchUsers", fetchUsers)
])