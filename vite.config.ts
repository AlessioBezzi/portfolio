import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: {
  env: {
    GITHUB_ACTIONS?: string;
    GITHUB_REPOSITORY?: string;
  };
};

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrganizationSite = /\.github\.io$/i.test(repositoryName);
const githubPagesBase =
  isGitHubPagesBuild && repositoryName && !isUserOrOrganizationSite
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
  base: githubPagesBase,
  plugins: [react()],
});
