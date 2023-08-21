import {
	BrowserRouter,
	Routes,
	Route,
  Navigate
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// Pages & Components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {

  const { user } = useAuthContext()

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route
							path='/'
							element={user ? <Home /> : <Navigate to='/login' />}
						/>
            <Route
              path='/signup'
              element={user ? <Navigate to='/' /> : <Signup />}
            />
            <Route
              path='/login'
              element={user ? <Navigate to='/' /> : <Login />}
            />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App