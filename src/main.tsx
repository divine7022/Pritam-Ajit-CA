import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Layout and Pages
import App from "./App";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndiaEntryPage from "./pages/IndiaEntryPage";
import WhollyOwnedSubsidiaryPage from "./pages/WhollyOwnedSubsidiaryPage";
import BranchOfficePage from "./pages/BranchOfficePage";
import StatutoryAuditPage from "./pages/StatutoryAuditPage";
import InternalAuditPage from "./pages/InternalAuditPage";
import PublicSectorAuditPage from "./pages/PublicSectorAuditPage";
import CompanySecretarialPage from "./pages/CompanySecretarialPage";
import TaxAuditPage from "./pages/TaxAuditPage";
import IndAsPage from "./pages/IndAsPage";
import IncomeTaxAdvisoryPage from "./pages/IncomeTaxAdvisoryPage";
import EasyItFilingPage from "./pages/EasyItFilingPage";
import InternationalTaxationPage from "./pages/InternationalTaxationPage";
import TransferPricingPage from "./pages/TransferPricingPage";
import GstRegistrationPage from "./pages/GstRegistrationPage";
import GstAuditPage from "./pages/GstAuditPage";
import AccountingOutsourcingPage from "./pages/AccountingOutsourcingPage";
import SezServicesPage from "./pages/SezServicesPage";
import PayrollServicesPage from "./pages/PayrollServicesPage";
import StpiNonStpiPage from "./pages/StpiNonStpiPage";
import DueDiligencePage from "./pages/DueDiligencePage";
import BusinessValuationPage from "./pages/BusinessValuationPage";
import CapitalGainAdvisoryPage from "./pages/CapitalGainAdvisoryPage";
import ReraServicesPage from "./pages/ReraServicesPage";
import LabourLawConsultancyPage from "./pages/LabourLawConsultancyPage";
import EnergySectorServicesPage from "./pages/EnergySectorServicesPage";
import FixedAssetServicesPage from "./pages/FixedAssetServicesPage";
import ProprietorshipPage from "./pages/ProprietorshipPage";
import PartnershipPage from "./pages/PartnershipPage";
import LlpPage from "./pages/LlpPage";
import TrustPage from "./pages/TrustPage";
import SocietyPage from "./pages/SocietyPage";
import PrivateLimitedCompanyPage from "./pages/PrivateLimitedCompanyPage";
import "./index.css";
import JointDevelopmentAgreementPage from "./pages/JointDevelopmentAgreementPage";
import CareerPage from "./pages/CareerPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/india-entry-strategy",
        element: <IndiaEntryPage />,
      },
      {
        path: "/wholly-owned-subsidiary",
        element: <WhollyOwnedSubsidiaryPage />,
      }, // The comma has been added here
      {
        path: "/branch-office",
        element: <BranchOfficePage />,
      },
      {
        path: "/statutory-audit", // Example URL
        element: <StatutoryAuditPage />,
      },
      {
        path: "/internal-audit", // Example URL
        element: <InternalAuditPage />,
      },
      {
        path: "/ind-as-advisory", // Example URL
        element: <IndAsPage />,
      },
      {
        path: "/public-sector-audit", // Example URL
        element: <PublicSectorAuditPage />,
      },
      {
        path: "/company-secretarial-services", // Example URL
        element: <CompanySecretarialPage />,
      },
      {
        path: "/tax-audit", // Example URL
        element: <TaxAuditPage />,
      },
      {
        path: "/income-tax-advisory", // Example URL
        element: <IncomeTaxAdvisoryPage />,
      },
      {
        path: "/easy-it-filing", // Example URL
        element: <EasyItFilingPage />,
      },
      {
        path: "/international-taxation", // Example URL
        element: <InternationalTaxationPage />,
      },
      {
        path: "/transfer-pricing",
        element: <TransferPricingPage />,
      },
      {
        path: "/gst-registration", // Example URL
        element: <GstRegistrationPage />,
      },
      {
        path: "/gst-audit", // Example URL
        element: <GstAuditPage />,
      },
      {
        path: "/accounting-outsourcing", // Example URL
        element: <AccountingOutsourcingPage />,
      },
      {
        path: "/sez-services", // Example URL
        element: <SezServicesPage />,
      },
      {
        path: "/payroll-services", // Example URL
        element: <PayrollServicesPage />,
      },
      {
        path: "/stpi-non-stpi-services", // Example URL
        element: <StpiNonStpiPage />,
      },
      {
        path: "/due-diligence", // Example URL
        element: <DueDiligencePage />,
      },
      {
        path: "/business-valuation", // Example URL
        element: <BusinessValuationPage />,
      },
      {
        path: "/capital-gain-advisory", // Example URL
        element: <CapitalGainAdvisoryPage />,
      },
      {
        path: "/rera-services", // Example URL
        element: <ReraServicesPage />,
      },
      {
        path: "/joint-development-agreement", // Example URL
        element: <JointDevelopmentAgreementPage />,
      },
      {
        path: "/labour-law-consultancy", // Example URL
        element: <LabourLawConsultancyPage />,
      },
      {
        path: "/energy-sector-services", // Example URL
        element: <EnergySectorServicesPage />,
      },
      {
        path: "/fixed-asset-services", // Example URL
        element: <FixedAssetServicesPage />,
      },
      {
        path: "/proprietorship", // Example URL
        element: <ProprietorshipPage />,
      },
      {
        path: "/partnership", // Example URL
        element: <PartnershipPage />,
      },
      {
        path: "/llp-registration", // Example URL
        element: <LlpPage />,
      },
      {
        path: "/trust-services", // Example URL
        element: <TrustPage />,
      },
      {
        path: "/society-registration", // Example URL
        element: <SocietyPage />,
      },
      {
        path: "/private-limited-company", // Example URL
        element: <PrivateLimitedCompanyPage />,
      },
      {
        path: "/career",
        element: <CareerPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
