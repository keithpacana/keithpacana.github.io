import React from 'react';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import NotFound from '../pages/404';
import About from '../pages/About';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { HashRouter, Route,Switch} from 'react-router-dom';

const AppRouter = () => (
	<HashRouter>
		<div>
			<NavBar/>
			<Switch>
				<Route path="/" component={Home} exact={true}/>
				<Route path="/about" component={About} exact={true}/>
				<Route path="/projects" component={Projects} exact={true}/>
				<Route component={NotFound} />
			</Switch>
			<Footer/>
		</div>
	</HashRouter>
);

export default AppRouter;