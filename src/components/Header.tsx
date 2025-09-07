import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown, Phone, MapPin } from "lucide-react";

const handleClick = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Element with ID "${id}" not found.`);
  }
};
console.log("nkil");
const Header = () => {
  // We will use this state to control which dropdown is open

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top Contact Bar */}

      <div className="bg-ca-teal-dark py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />

              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />

              <span>Aurangabad</span>
            </div>
          </div>

          <div className="flex gap-4"></div>
        </div>
      </div>

      {/* Main Navigation */}

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">
              <img
                src="/ca_india_new_logo_sticker_cars_motorcycles_laptops-600x315w.jpg" // Assumes your logo is named this in the /public folder
                className="h-12 w-auto" // Adjust the height (h-12) as needed
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Pritam Ajit & Company</h1>

              <p className="text-sm opacity-90">Chartered Accountants</p>
            </div>
          </div>

          {/* Navigation Menu */}

          <nav className="flex items-center space-x-1">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link to="/">HOME</Link>
            </Button>

            <DropdownMenu
              open={activeDropdown === "about-us"}
              onOpenChange={(isOpen) =>
                setActiveDropdown(isOpen ? "about-us" : null)
              }
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  ABOUT US <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 bg-white shadow-lg">
                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={(e) => {
                    e.preventDefault();
                    handleClick("our-company");
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Our Company
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={(e) => {
                    e.preventDefault();
                    handleClick("purpose-vision-mission");
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Purpose, Vision & Mission
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={(e) => {
                    e.preventDefault();
                    handleClick("our-team");
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Our Team
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={() => {
                    // The 'e' is no longer needed
                    handleClick("our-services"); // <-- FIXED: Use the new lowercase ID.
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Our Services
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={(e) => {
                    e.preventDefault();
                    handleClick("affiliations");
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Affiliations
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu
              open={activeDropdown === "market-entry"}
              onOpenChange={(isOpen) =>
                setActiveDropdown(isOpen ? "market-entry" : null)
              }
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  INDIA MARKET ENTRY <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 bg-white shadow-lg">
                {/* 👇 THIS IS THE UPDATED ITEM 👇 */}
                <DropdownMenuItem className="hover:bg-primary/10 p-0" asChild>
                  <Link
                    to="/india-entry-strategy"
                    className="px-2 py-1.5 w-full"
                  >
                    India Entry Strategy
                  </Link>
                </DropdownMenuItem>

                {/* You can do the same for the other items when you create their pages */}
                <DropdownMenuItem className="hover:bg-primary/10 p-0" asChild>
                  <Link
                    to="/wholly-owned-subsidiary"
                    className="px-2 py-1.5 w-full"
                  >
                    Wholly Owned Subsidiary (WOS)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0" asChild>
                  <Link to="/branch-office" className="px-2 py-1.5 w-full">
                    Branch Office (BO)
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 bg-white shadow-lg">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Audit & Assurance
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/statutory-audit"
                        className="px-2 py-1.5 w-full"
                      >
                        Statutory Audit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/internal-audit" className="px-2 py-1-5 w-full">
                        Internal Audit
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/ind-as-advisory"
                        className="px-2 py-1.5 w-full"
                      >
                        IND AS Advisory
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/public-sector-audit"
                        className="px-2 py-1.5 w-full"
                      >
                        Public Sector Audit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/company-secretarial-services"
                        className="px-2 py-1.5 w-full"
                      >
                        Company Secretarial Services
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Taxation Services
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/tax-audit" className="px-2 py-1-5 w-full">
                        Tax Audit
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/income-tax-advisory"
                        className="px-2 py-1-5 w-full"
                      >
                        Income Tax Advisory
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/easy-it-filing" className="px-2 py-1-5 w-full">
                        Easy IT Filing
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Transfer Pricing
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/international-taxation"
                        className="px-2 py-1-5 w-full"
                      >
                        International Taxation
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/transfer-pricing"
                        className="px-2 py-1.5 w-full"
                      >
                        Transfer Pricing
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    GST
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/gst-registration"
                        className="px-2 py-1.5 w-full"
                      >
                        GST Registration
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/gst-audit" className="px-2 py-1-5 w-full">
                        GST Audit
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Outsourcing
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/accounting-outsourcing"
                        className="px-2 py-1-5 w-full"
                      >
                        Accounting Outsourcing
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/sez-services" className="px-2 py-1-5 w-full">
                        SEZ Services
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/payroll-services"
                        className="px-2 py-1-5 w-full"
                      >
                        Payroll Services
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/stpi-non-stpi-services"
                        className="px-2 py-1.5 w-full"
                      >
                        STPI / Non-STPI Services
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/due-diligence" className="px-2 py-1.5 w-full">
                        Due Diligence
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Business Advisory
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/business-valuation"
                        className="px-2 py-1.5 w-full"
                      >
                        Business Valuation
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/capital-gain-advisory"
                        className="px-2 py-1.5 w-full"
                      >
                        Capital Gain Advisory
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/rera-services" className="px-2 py-1.5 w-full">
                        RERA Services
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Management Consulting
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/joint-development-agreement"
                        className="px-2 py-1.5 w-full"
                      >
                        Joint Development Agreement
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/labour-law-consultancy"
                        className="px-2 py-1.5 w-full"
                      >
                        Labour Law Consultancy
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/energy-sector-services"
                        className="px-2 py-1.5 w-full"
                      >
                        Energy Sector Services
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/fixed-asset-services"
                        className="px-2 py-1.5 w-full"
                      >
                        Fixed Asset Services
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Startup Services
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/proprietorship" className="px-2 py-1.5 w-full">
                        Proprietorship
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/partnership" className="px-2 py-1.5 w-full">
                        Partnership
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/llp-registration"
                        className="px-2 py-1.5 w-full"
                      >
                        Limited Liability Partnership
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/trust-services" className="px-2 py-1.5 w-full">
                        Trust Services
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/society-registration"
                        className="px-2 py-1.5 w-full"
                      >
                        Society Registration
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/private-limited-company"
                        className="px-2 py-1.5 w-full"
                      >
                        Private Limited Company
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link to="/career">CAREER</Link>
            </Button>

            <Button variant="ghost" className="text-white hover:bg-white/10">
              CONTACT US
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
