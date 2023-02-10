import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css'
import HomeLayout from "./HomeLayout";
import DashboardLayout from './DashboardLayout';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Listjobvacancy from './pages/listjobvacancy/Listjobvacancy';
import Form from './components/form/Form';
import ChangePassword from './pages/changepassword/ChangePassword';
import Profile from './pages/profile/Profile';
import DetailsPage from './pages/detailspage/DetailsPage';
import Jobvacancy from './pages/jobvacancy/Jobvacancy';
import Page404 from './pages/page404/Page404';




function App() {

  const LoginRoute = (props) => {

    if (Cookies.get('token') !== undefined) {
        return <Navigate to={'/'} />
    } else if (Cookies.get('token') === undefined) {
        return props.children
    }

  }

  const GuestRoute = (props) => {

    if (Cookies.get('token') === undefined) {
        return <Navigate to={'/login'} />
    } else if (Cookies.get('token') !== undefined) {
        return props.children
    }

  }

  return (
    <>
    <BrowserRouter>
    <GlobalProvider>

      <Routes>

        <Route path="/login" element={
          <LoginRoute>
            <HomeLayout>
              <Login/>
            </HomeLayout>
          </LoginRoute>
          } />

          <Route path='*' element={
            <HomeLayout>
              <Page404/>
            </HomeLayout>
          }/>

          <Route path="/register" element={
            <LoginRoute>
              <HomeLayout>
                <Register/>
              </HomeLayout>
            </LoginRoute>
          } />

          <Route path="/" element={
          <HomeLayout>
            <Home/>
          </HomeLayout>
          } />

          <Route path="/job-vacancy/:id" element={
            <HomeLayout>
              <DetailsPage/>
            </HomeLayout>
          } />

          <Route path="/job-vacancy" element={
            <HomeLayout>
              <Jobvacancy/>
            </HomeLayout>
          } />

          <Route path="/dashboard" element={
            <GuestRoute>
            <DashboardLayout>
              <Dashboard/>
            </DashboardLayout>
            </GuestRoute>
          } />

          <Route path="/dashboard/list-job-vacancy/form" element={
            <GuestRoute>
            <DashboardLayout>
              <Form/>
            </DashboardLayout>
            </GuestRoute>
          } />

          <Route path="/dashboard/list-job-vacancy" element={
            <GuestRoute>
            <DashboardLayout>
              <Listjobvacancy/>
            </DashboardLayout>
            </GuestRoute>
          } />

          <Route path="/dashboard/list-job-vacancy/form" element={
            <GuestRoute>
            <DashboardLayout>
              <Form/>
            </DashboardLayout>
            </GuestRoute>
          } />

          <Route path="/dashboard/change-password" element={
            <GuestRoute>
            <DashboardLayout>
              <ChangePassword/>
            </DashboardLayout>
            </GuestRoute>
          } />

          <Route path="/dashboard/profile" element={
            <GuestRoute>
            <DashboardLayout>
              <Profile/>
            </DashboardLayout>
            </GuestRoute>
          } />
          
        </Routes>

    </GlobalProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
