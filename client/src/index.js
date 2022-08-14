import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { Authentication, CreateNew, Welcome } from "./views/pages/Pages"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route
					path='/auth'
					element={<Authentication type='existing' />}
				/>
				<Route
					path='/auth/new'
					element={<Authentication type='new' />}
				/>
				<Route
					path='*'
					element={
						<main>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Route>
			<Route path='/dashboard' element={<Welcome />}>
				<Route
					path='/dashboard/create-vendor'
					element={<CreateNew type='business' />}
				/>
				<Route
					path='/dashboard/create-organizer'
					element={<CreateNew type='organizer' />}
				/>
				<Route
					path='/dashboard/create-event'
					element={<CreateNew type='event' />}
				/>
			</Route>
		</Routes>
	</BrowserRouter>
)
