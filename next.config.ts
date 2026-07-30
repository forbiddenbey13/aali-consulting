import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/aboutus",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/AboutUs",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/bookkeepingandaccounting",
        destination: "/bookkeeping-and-accounting",
        permanent: true,
      },
      {
        source: "/Bookkeeping&Accounting",
        destination: "/bookkeeping-and-accounting",
        permanent: true,
      },
      {
        source: "/cfoadvisoryandgovernance",
        destination: "/cfo-advisory-and-governance",
        permanent: true,
      },
      {
        source: "/CFOAdvisory&Governance",
        destination: "/cfo-advisory-and-governance",
        permanent: true,
      },
      {
        source: "/contactus",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/ContactUs",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/corporatetaxes",
        destination: "/corporate-taxes",
        permanent: true,
      },
      {
        source: "/CorporateTaxes",
        destination: "/corporate-taxes",
        permanent: true,
      },
      {
        source: "/disabilityandlifeplanning",
        destination: "/disability-and-life-planning",
        permanent: true,
      },
      {
        source: "/Disability&LifePlanning",
        destination: "/disability-and-life-planning",
        permanent: true,
      },
      {
        source: "/lifeandestatetaxplanning",
        destination: "/life-and-estate-tax-planning",
        permanent: true,
      },
      {
        source: "/Life&EstateTaxPlanning",
        destination: "/life-and-estate-tax-planning",
        permanent: true,
      },
      {
        source: "/ncwande",
        destination: "/ncw-and-e",
        permanent: true,
      },
      {
        source: "/NCWandE",
        destination: "/ncw-and-e",
        permanent: true,
      },
      {
        source: "/nmbandlf",
        destination: "/nmb-and-lf",
        permanent: true,
      },
      {
        source: "/NMBandLF",
        destination: "/nmb-and-lf",
        permanent: true,
      },
      {
        source: "/personaltax",
        destination: "/personal-tax",
        permanent: true,
      },
      {
        source: "/PersonalTax",
        destination: "/personal-tax",
        permanent: true,
      },
      {
        source: "/strategicplanning",
        destination: "/strategic-planning",
        permanent: true,
      },
      {
        source: "/StrategicPlanning",
        destination: "/strategic-planning",
        permanent: true,
      },
      {
        source: "/systemsandtechnologyimplementation",
        destination: "/systems-and-technology-implementation",
        permanent: true,
      },
      {
        source: "/Systems&TechnologyImplementation",
        destination: "/systems-and-technology-implementation",
        permanent: true,
      },
      {
        source: "/taxservice",
        destination: "/tax-service",
        permanent: true,
      },
      {
        source: "/TaxService",
        destination: "/tax-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
