import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
	name: "user",
	initialState: {
		authenticated: false,
		name: "",
		email: "",
		uid: "",
	},
	reducers: {
		setEmail: (state, update) => {
			state.value = update
		},
	},
})

export const { setEmail } = userSlice.actions

export default userSlice.reducer
