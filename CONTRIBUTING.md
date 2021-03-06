# Contribute to Stryker

This is the contribution guide for Stryker. Great to have you here! Here are a few ways you can help make this project better.

## Team members

* Simon de Lang: First developer on Stryker. Started Stryker as part of his thesis at Info Support. [simondel](http://github.com/simondel) on github.
* Nico Jansen: Second developer on Stryker. Originaly came up with the idea for the mutation testing framework as a thesis at Info Support. 
[nicojs](http://github.com/nicojs) on github or [@_nicojs](https://twitter.com/_nicojs) on twitter

## Learn & listen

Get in touch with us through twitter or via the [Stryker gitter](https://gitter.im/stryker-mutator/stryker)

## Runner Stryker locally
We use [Lerna](https://lernajs.io/) to manage the packages in this repository. You don't have to install it globally. The packages themselves can be found in the [packages folder](https://github.com/stryker-mutator/stryker/tree/master/packages). npm commands such as `npm test` can be executed from the root of the project but executing them inside of a package folder is more time efficient. However, we suggest running `npm test` in the root of the project before a commit to ensure that everything still works. To get Stryker running locally, please follow these steps:

1. Clone the repository
1. Install dependencies using `npm install` in the root of the project
1. Run `npm test` in the root of the project or in one of the package folders

## Running Stryker on Stryker
We support mutation testing Stryker with Stryker! After you got Stryker working locally, you can follow these steps to mutation test Stryker:
1. Navigate to the root of the project
1. Build all Stryker packages: `npm run build`
1. Navigate to `packages/stryker` 
1. Run `node bin/stryker run`

## Adding new features

New features are welcome! Either as requests or proposals. 

1. Please create an issue first or let us know via the [Stryker gitter](https://gitter.im/stryker-mutator/stryker)
2. Create a fork on your github account.
3. When writing your code, please conform to the existing coding style.
   See [.editorconfig](https://github.com/stryker-mutator/stryker/blob/master/.editorconfig) and the [typescript guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
4. Please create or edit unit tests or integration tests.
5. Run the tests using `npm test`
6. When creating commits, please conform to [the angular commit message style](https://docs.google.com/document/d/1rk04jEuGfk9kYzfqCuOlPTSJw3hEDZJTBN5E5f1SALo/edit).
   Namely in the form `<type>(<scope>): <subject>\n\n[body]`
   * Type: feat, fix, docs, style, refactor, test, chore.
   * Scope can the the file or group of files (not a strict right or wrong)
   * Subject and body: present tense (~changed~*change*, ~added~*add*) and include motivation and contrasts with previous behavior
  

Don't get discouraged! We estimate that the response time from the
maintainers is around a day or so. 

# Bug triage

Found a bug? Don't worry, we'll fix it, or you can ;) 

Please report a bug report on our [issues page](https://github.com/stryker-mutator/stryker/issues). In this please:

1. Label the issue as bug
2. Explain what the bug is in clear English
3. Include reproduction steps
   This can be an example project, code snippit, etc
4. Include the expected behaviour.
5. Include actual behaviour.
6. Add more details if required (i.e. which browser, which test runner, which versions, etc)

# Community 
Do you want to help? Great! These are a few things you can do:

* Evangelize mutation testing  
  Mutation testing is still relatively new, especially in JavaScript. Please help us get the word out there!  
  Share your stories in blog posts an on social media. Please inform us about it! 
* Did you use Stryker? Your feedback is very valuable to us. Good and bad! Please contact us and let us know what you think
