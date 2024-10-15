import { Route, Router, Routes } from 'react-router-dom';
import styles from'./App.module.css';
import Main from './Pages/Main/Main';
import Registration from './Pages/Registration/Pegistration';
import Login from './Pages/Login/Login';

function App() {
    return (
		<div className={styles.main}>
			<Routes>
				<Route path="/" element={<Main/>}>
					<Route path="/compendium" element={<div>compendium</div>}/>
					<Route path="/public" element={<div>public</div>}/>
					<Route path="/home" element={<div>home</div>}/>
				</Route>
				<Route path="registration" element={<Registration/>}/>
				<Route path="login" element={<Login/>}/>
			</Routes>
		</div>
	);
}

export default App;
