import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ECommerce from './pages/Dashboard/ECommerce';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import PayoutList from './pages/PayoutList';
import Downline from './pages/Downline';
import AccStatement from './pages/AccStatement';
import axios from 'axios';
import ProductEntry from './pages/ProductEntry';
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userid, setUserid] = useState('40');
  //const [username, setUserName] = useState('');
  //setUserid(localStorage.uid);
  //setUserid('40');
  useEffect(() => {
    /*const checkAuthentication = async () => {
      await axios
        .post('http://localhost:8080/api/checkuser.php', {
          username: userid
        })
        .then((response) => {
          //console.log(response.data.message); // Success message or error message
          if (response.data.user) {
            // If login is successful, you can store the user data or authentication token in localStorage or state for further usage
            //console.log(response.data.user);
            setAuthenticated(true);
            localStorage.setItem('UserName',response.data.user.mname);
          }else{
            setAuthenticated(false);
          }
        })
        .catch((error) => {
          setAuthenticated(false);
        });
    };*/

    const checkAuthentication = () => {
      const token = true; // Replace 'authToken' with your token key
      if (token) {
        // If the user has a valid token, set the authenticated state to true
        setAuthenticated(true);
      }
    };
    checkAuthentication();
  }, []);

  return authenticated ? (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />
          <Route
            path="/productentry"
            element={
              <Suspense fallback={<Loader />}>
                <ProductEntry />
              </Suspense>
            }
          />
          <Route
            path="/downline"
            element={
              <Suspense fallback={<Loader />}>
                <Downline />
              </Suspense>
            }
          />
          
          <Route
            path="/payoutlist"
            element={
              <Suspense fallback={<Loader />}>
                <PayoutList />
              </Suspense>
            }
          />
          <Route
            path="/accstatement"
            element={
              <Suspense fallback={<Loader />}>
                <AccStatement />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  ) : (
    <Login />
  );
}

export default App;
