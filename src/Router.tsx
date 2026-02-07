import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { routPaths } from 'constants/routs';

import HomePage from 'pages/Home';
import DesigningPage from 'pages/Designing';
import DocumentationPage from 'pages/Documentation';
import FireSafetyPage from 'pages/FireSafety';
import SecuritySystemsPage from 'pages/SecuritySystems';
import ElectricitySupplyPage from 'pages/ElectricitySupply';
import InstallationWorksPage from 'pages/InstallationWorks';

const Router = () => (
  <Routes>
    <Route path={routPaths.home} element={<HomePage />} />
    <Route path={routPaths.designing} element={<DesigningPage />} />
    <Route path={routPaths.documentation} element={<DocumentationPage />} />
    <Route path={routPaths.fireSafety} element={<FireSafetyPage />} />
    <Route path={routPaths.securitySystems} element={<SecuritySystemsPage />} />
    <Route path={routPaths.electricitySupply} element={<ElectricitySupplyPage />} />
    <Route path={routPaths.installationWorks} element={<InstallationWorksPage />} />
  </Routes>
);

export default Router;