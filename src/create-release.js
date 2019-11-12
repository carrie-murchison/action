const core = require('@actions/core');
const { GitHub, context } = require('@actions/github');

async function run() {
  try {
    // Get authenticated GitHub client (Ocktokit): https://github.com/actions/toolkit/tree/master/packages/github#usage
    

    // Get owner and repo from context of payload that triggered the action: https://help.github.com/en/github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
    

    // Get the inputs from the workflow file: https://github.com/actions/toolkit/tree/master/packages/core#inputsoutputs
    

    // This removes the 'refs/tags' portion of the string, i.e. from 'refs/tags/v1.10.15' to 'v1.10.15'
    

    // Create a release
    // API Documentation: https://developer.github.com/v3/repos/releases/#create-a-release
    // Octokit Documentation: https://octokit.github.io/rest.js/#octokit-routes-repos-create-release
    

    // Get the ID, html_url, and upload URL for the created Release from the response

    // Set the output variables for use by other actions: https://github.com/actions/toolkit/tree/master/packages/core#inputsoutputs
    
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
