import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './routes'
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment } from 'react';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(function(route , index) {
            //nếu layout = null (theo nghĩa đen được định nghĩa bên file route) thì trả ra Fragment(là 1 Element rỗng)
            //Không phải thì trả ra DefaultLayout có Header và Sidebar
            let Layout = DefaultLayout
            if(route.layout){
              Layout = route.layout
            }else if (route.layout === null){
              Layout = Fragment
            }
            //để biến nó thành Element 
            const Page = route.component;
            return (
              <Route key={index} path={route.path} 
                element={
                  <Layout key={index}>
                    <Page/>
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
