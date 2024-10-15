import { Outlet, Route, Router, Routes } from 'react-router-dom';
import styles from'./App.module.css';
import Main from './Pages/Main/Main';
import Registration from './Pages/Registration/Pegistration';

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
			</Routes>
		</div>
	);
}

export default App;
