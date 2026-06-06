import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: {
  env: {
    GITHUB_PAGES_BASE?: string;
    GITHUB_ACTIONS?: string;
    GITHUB_REPOSITORY?: string;
  };
};

function normalizeBasePath(basePath?: string) {
  if (!basePath) {
    return undefined;
  }

  if (basePath === "/") {
    return "/";
  }

  return `/${basePath.replace(/^\/+|\/+$/g, "")}/`;
}

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrganizationSite = /\.github\.io$/i.test(repositoryName);
const configuredGitHubPagesBase = normalizeBasePath(process.env.GITHUB_PAGES_BASE);
const githubPagesBase =
  configuredGitHubPagesBase ??
  (isGitHubPagesBuild && repositoryName && !isUserOrOrganizationSite
    ? `/${repositoryName}/`
    : "/");

export default defineConfig({
  base: githubPagesBase,
  plugins: [react()],
});
