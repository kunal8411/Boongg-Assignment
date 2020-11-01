
import './App.css';
import Header from './components/header/header.component';
import PostList from './components/postLists/postList.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { Switch, Route}  from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
     <Route exact path='/' component={PostList}/>
     <Route exact path='/signin' component={SignInAndSignOut}/>
      
    </Switch>

     
    </div>
  );
}

export default App;
