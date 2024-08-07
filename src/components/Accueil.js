import React from 'react';
import DefaultNav from './DefaultNav';
import BackgroundSection from './background';
import MissionComponent from './MissionComponent';
import Nosprogramme from './Nosprogramme';
import OrientComponent from './OrienterComponent';
import PartenairesComponent from './paternaire';
import ContactezNous from './contacteznous';

const Accueil = () => (
  <div>
  <section className="section">
    <DefaultNav />
    <BackgroundSection />
    <MissionComponent />
    <Nosprogramme />
    <OrientComponent/>
    <PartenairesComponent />
    <ContactezNous />
  </section>
  </div>
);

export default Accueil;
