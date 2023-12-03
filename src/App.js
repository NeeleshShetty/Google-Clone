
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from './Pages/SearchPage';

function App() {
  return (
		<div className="App">
			<Router>
        <Routes>
          <Route path='/search' Component={SearchPage}></Route>
					<Route
						path="/"
						Component={Home}
          ></Route>
          
				</Routes>
				
			</Router>
		</div>
	);
}

export default App;
