import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Landing Page Components
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TargetUsersSection from './components/TargetUsersSection';
import FeaturesHighlight from './components/FeaturesHighlight';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Enterprise Space Components
import EntrepriseLayout from './entreprise/EntrepriseLayout';
import LoginEntreprise from './entreprise/pages/auth/LoginEntreprise';
import SignupEntreprise from './entreprise/pages/auth/SignupEntreprise';
import ForgotPassword from './entreprise/pages/auth/ForgotPassword';
import Dashboard from './entreprise/pages/Dashboard';
import OffresList from './entreprise/pages/offres/OffresList';
import OffresCreate from './entreprise/pages/offres/OffresCreate';
import CandidaturesList from './entreprise/pages/candidatures/CandidaturesList';
import ConventionsList from './entreprise/pages/conventions/ConventionsList';
import StagiairesList from './entreprise/pages/stagiaires/StagiairesList';
import RapportsList from './entreprise/pages/rapports/RapportsList';
import Messagerie from './entreprise/pages/Messagerie';
import Profil from './entreprise/pages/Profil';
import Parametres from './entreprise/pages/Parametres';

// Student Space Components
import EleveLayout from './eleve/EleveLayout';
import LoginEleve from './eleve/pages/auth/LoginEleve';
import SignupEleve from './eleve/pages/auth/SignupEleve';
import ForgotPasswordEleve from './eleve/pages/auth/ForgotPassword';
import DashboardEleve from './eleve/pages/Dashboard';
import OffresSearch from './eleve/pages/offres/OffresSearch';
import CandidaturesListEleve from './eleve/pages/candidatures/CandidaturesList';
import ConventionsListEleve from './eleve/pages/conventions/ConventionsList';
import StageEnCours from './eleve/pages/stage/StageEnCours';
import MonRapport from './eleve/pages/rapport/MonRapport';
import MessagerieEleve from './eleve/pages/Messagerie';
import ProfilEleve from './eleve/pages/Profil';
import Ressources from './eleve/pages/Ressources';

// Administration Space Components
import DirectionLayout from './direction/DirectionLayout';
import LoginAdmin from './direction/pages/auth/LoginAdmin';
import DashboardAdmin from './direction/pages/Dashboard';
import UtilisateursList from './direction/pages/utilisateurs/UtilisateursList';
import EntreprisesValidation from './direction/pages/entreprises/EntreprisesValidation';
import EntreprisesList from './direction/pages/entreprises/EntreprisesList';
import OffresModeration from './direction/pages/offres/OffresModeration';
import CandidaturesSupervision from './direction/pages/candidatures/CandidaturesSupervision';
import ConventionsGestion from './direction/pages/conventions/ConventionsGestion';
import RapportsGestion from './direction/pages/rapports/RapportsGestion';
import MessagerieAdmin from './direction/pages/Messagerie';
import DocumentsGestion from './direction/pages/documents/DocumentsGestion';
import Statistiques from './direction/pages/statistiques/Statistiques';
import ParametresAdmin from './direction/pages/parametres/Parametres';
import LogsActivite from './direction/pages/logs/LogsActivite';

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TargetUsersSection />
      <FeaturesHighlight />
      <SecuritySection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Enterprise Authentication Routes */}
        <Route path="/entreprise/login" element={<LoginEntreprise />} />
        <Route path="/entreprise/signup" element={<SignupEntreprise />} />
        <Route path="/entreprise/forgot-password" element={<ForgotPassword />} />

        {/* Enterprise Protected Routes */}
        <Route path="/entreprise" element={<EntrepriseLayout />}>
          <Route index element={<Navigate to="/entreprise/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="offres" element={<OffresList />} />
          <Route path="offres/create" element={<OffresCreate />} />
          <Route path="candidatures" element={<CandidaturesList />} />
          <Route path="conventions" element={<ConventionsList />} />
          <Route path="stagiaires" element={<StagiairesList />} />
          <Route path="rapports" element={<RapportsList />} />
          <Route path="messagerie" element={<Messagerie />} />
          <Route path="profil" element={<Profil />} />
          <Route path="parametres" element={<Parametres />} />
        </Route>

        {/* Student Authentication Routes */}
        <Route path="/eleve/login" element={<LoginEleve />} />
        <Route path="/eleve/signup" element={<SignupEleve />} />
        <Route path="/eleve/forgot-password" element={<ForgotPasswordEleve />} />

        {/* Student Protected Routes */}
        <Route path="/eleve" element={<EleveLayout />}>
          <Route index element={<Navigate to="/eleve/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardEleve />} />
          <Route path="offres" element={<OffresSearch />} />
          <Route path="candidatures" element={<CandidaturesListEleve />} />
          <Route path="conventions" element={<ConventionsListEleve />} />
          <Route path="stage" element={<StageEnCours />} />
          <Route path="rapport" element={<MonRapport />} />
          <Route path="messagerie" element={<MessagerieEleve />} />
          <Route path="profil" element={<ProfilEleve />} />
          <Route path="ressources" element={<Ressources />} />
        </Route>

        {/* Administration Authentication Routes */}
        <Route path="/admin/login" element={<LoginAdmin />} />

        {/* Administration Protected Routes */}
        <Route path="/admin" element={<DirectionLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="utilisateurs" element={<UtilisateursList />} />
          <Route path="entreprises" element={<EntreprisesValidation />} />
          <Route path="entreprises/liste" element={<EntreprisesList />} />
          <Route path="offres" element={<OffresModeration />} />
          <Route path="candidatures" element={<CandidaturesSupervision />} />
          <Route path="conventions" element={<ConventionsGestion />} />
          <Route path="rapports" element={<RapportsGestion />} />
          <Route path="messagerie" element={<MessagerieAdmin />} />
          <Route path="documents" element={<DocumentsGestion />} />
          <Route path="statistiques" element={<Statistiques />} />
          <Route path="parametres" element={<ParametresAdmin />} />
          <Route path="logs" element={<LogsActivite />} />
        </Route>

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
