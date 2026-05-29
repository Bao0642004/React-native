import {createAsyncThunk} from"@reduxjs/toolkit";
import { Users } from "../../../Data.smaple";

export const loginthunk = createAsyncThunk(
    'auth/loginthunk',
    async (data) => {
        const users = Users;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === data.username && users[i].password === data.password) {

                return users[i].username;
            }
        }
        throw new Error('Invalid credentials');
    },
)