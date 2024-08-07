import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Accueil from './components/Accueil';
import Recruteur from './components/Recruteur';
import Travailler from './components/Travailler';
import Services from './components/service';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import PasswordChangeForm from './components/changePassword';
import ResetPasswordPage from './components/resetpassword';
import PasswordReset from './components/reset-password';
import ServicePublic from './components/servicepublic';
import TravaillerSP from './components/servicePublic Components/TravaillerSP';
import RecruteurSP from './components/servicePublic Components/RecruteurSP';
import ServicePublicSettings from './components/servicePublic Components/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Aide from './pages/Aide';
import MyForm from './pages/myforms';
import Validation from './pages/Validation';
import AideContent from './pages/AideContent';
import AgenceValidation from './pages2/Valide';
import HomeAgence from './pages2/Home';
import About from './pages/About';
import NotificationComponent from './pages/Notifications';
import AgenceNotification from './pages2/Agence_Notif';
import Settings from './pages/Settings';
import AgenceSettings from './pages2/Settings';
import DisplayAgence from './pages/DisplayAgence';
import DisplayZone from './pages2/DisplayZone';
import DisplayDemande from './pages/DisplayDemande';
import AgenceDisplayDemande from './pages2/AgenceDisplayDemande';
import DisplayOffre from './pages/DisplayOffre';
import AgenceDisplayOffre from './pages2/AgenceDisplayOffre';
import DeleteOffre from './pages/Deleteuser';
import DeleteAgenceOffre from './pages2/Deleteuser';
import AgenceList from './pages2/list';
import List from './pages/list';
import CotonouLocalities from './pages/Statistics';
import AgenceStatistics from './pages2/AgenceStatistics';
import ChangeUsername from './components/settingComponents/changeUsername';
import ChangePassword from './components/settingComponents/changepassword';
import ChangeEmail from './components/settingComponents/changeEmailjs';
import Reservation from './components/reservation';
import TestDaptitude from './components/Test_D\'aptitude';
function App() {
  return (
    <div className="App">
      <Router>
        
        <div className="body-content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/recruteur" element={<Recruteur />} />
          <Route path="/travailler" element={<Travailler />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminAccueil" element={<Home />} />
          <Route path="/agence" element={<HomeAgence />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} /> 
          <Route path="/passwordchange" element={<PasswordChangeForm/>} />
          <Route path='/Add/Admin' exact element={<About/>} />
          <Route path='/settings' exact element={<Settings/>} />
          <Route path='/agence/settings' exact element={<AgenceSettings/>} />
          <Route path='/sevicepublic/settings' exact element={<ServicePublicSettings/>} />
          <Route path='/Notifications' exact element={<NotificationComponent/>} />
           <Route path='/agence/Notifications' exact element={<AgenceNotification/>} />
          <Route path='/AgenceList' exact element={<DisplayAgence/>} />
           <Route path='/agence/zone' exact element={<DisplayZone/>} />
          <Route path='/demandeList' exact element={<DisplayDemande/>} />
           <Route path='/agence/Demandeur' exact element={<AgenceDisplayDemande/>} />
          <Route path='/offreList' exact element={<DisplayOffre/>} />
           <Route path='/agence/Recruteur' exact element={<AgenceDisplayOffre/>} />
          <Route path='/Aide' exact element={<Aide/>} />
          <Route path='/myforms' exact element={<MyForm/>} />
           <Route path='/sevice/test daptitude' exact element={<TestDaptitude/>} />
          <Route path='/reservation' exact element={<Reservation/>} />
          <Route path='/Aide/Content' exact element={<AideContent/>} />
         <Route path='/statistics' exact element={<CotonouLocalities/>} />
         <Route path='/agence/Statistics' exact element={<AgenceStatistics/>} />
          <Route path='/delete' exact element={<DeleteOffre/>} />
          <Route path='/agence/delete' exact element={<DeleteAgenceOffre/>} />
          <Route path='/List' exact element={<List/>} />
          <Route path='/Validation' exact element={<Validation/>} />
		  <Route path='/agence/Valide' exact element={<AgenceValidation/>} />
          <Route path='/agence/List' exact element={<AgenceList/>} />
          <Route path="/Service_travailler" element={<TravaillerSP />} />
          <Route path="/Service_recruteur" element={<RecruteurSP />} />
          <Route path='/chef_de_quartier' exact element={<ServicePublic/>} />
          <Route path='/ChangeUsername' exact element={<ChangeUsername/>} />
          <Route path='/ChangePassword' exact element={<ChangePassword/>} />
          <Route path='/ResetPassword' exact element={<ResetPasswordPage/>} />
          <Route path='/reset-password' exact element={<PasswordReset/>} />
          <Route path='/ChangeEmail' exact element={<ChangeEmail/>} />
        </Routes>
         </div>
      </Router>
    </div>
  );
}

export default App;
