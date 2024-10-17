import { Route, Router, Routes } from 'react-router-dom';
import styles from'./App.module.css';
import Main from './Pages/Main/Main';
import Registration from './Pages/Registration/Pegistration';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AuthProvider from './providers/AuthProvider';
import Profile from './Pages/Profile/Profile';

function App() {
    return (
		<div className={styles.main}>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Main/>}>
						<Route path="/compendium" element={<div>compendium</div>}/>
						<Route path="/public" element={<div>public</div>}/>
						<Route path="/home" element={<Home/>}/>
						<Route path="/profile" element={<Profile/>}/>
					</Route>
					<Route path="registration" element={<Registration/>}/>
					<Route path="login" element={<Login/>}/>
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
