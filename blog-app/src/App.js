import './App.scss';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import { Home, CreatePost, ShowAllPosts, NotFound, ShowSinglePost } from './Pages';
import { Page, TopMenu } from './Components'

function App()
{
    return (
        <div className="App">
            <Router>
                <TopMenu />

                <Page>
                    <Routes>
                        <Route path="/" element={ <Home/> } />
                        <Route path="/post/create" element={ <CreatePost/> } />
                        <Route path="/post/show" element={ <ShowAllPosts/> } />
                        <Route path="/post/show/:id" element={ <ShowSinglePost/> } />
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </Page>
            </Router>
        </div>
    );
}

export default App;
