import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aaliconsulting.ca"; // Replace with your actual domain

  const routes = [
    "",
    "/about-us",
    "/bookkeeping-and-accounting",
    "/cfo-advisory-and-governance",
    "/consult",
    "/contact-us",
    "/corporate-taxes",
    "/disability-and-life-planning",
    "/life-and-estate-tax-planning",
    "/ncw-and-e",
    "/nmb-and-lf",
    "/personal-tax",
    "/ssbr",
    "/strategic-planning",
    "/systems-and-technology-implementation",
    "/tax-service",
    "/login",
    "/dashboard",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
