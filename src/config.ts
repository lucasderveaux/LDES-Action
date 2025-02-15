import * as core from '@actions/core';

export interface IConfig {
	url: string; // HTTP(S) data source
	storage: string; // directory where data will be written
	gh_pages_branch: string; // branch used for deploying to GitHub Pages
	gh_pages_url: string; // URL of the GitHub Pages deployment
	git_username: string; // GitHub username that makes the commits
	git_email: string; // GitHub email that makes the commits
	fragmentation_strategy: string; // fragmentation strategy
	fragmentation_page_size: number; // page size for fragmentation
	datasource_strategy: string; // datasource strategy
	materialize_version: boolean
}

export function getConfig(): IConfig {
	return {
		url: core.getInput('url'),
		storage: core.getInput('storage'),
		gh_pages_branch: core.getInput('gh_pages_branch'),
		gh_pages_url: core.getInput('gh_pages_url'),
		git_username: core.getInput('git_username'),
		git_email: core.getInput('git_email'),
		fragmentation_strategy: core.getInput('fragmentation_strategy'),
		fragmentation_page_size: parseInt(core.getInput('fragmentation_page_size')),
		datasource_strategy: core.getInput('datasource_strategy'),
		materialize_version: (core.getInput('materialize_version')==='true')
	};
}
