# Getting started with catjs & jQueryMobile


## Setup catjs

1.	Download and install node.js http://nodejs.org/
2.	Open the cmd : 
	
	cd {select.path}/catjs-jqm-seed
	npm install -g catjs

## Create a new cat project

In this is example we already created a catjs project
In the cmd write the command:
	
	cd {select.path}/catjs_example
	catcli --init
	prompt: Enter the project name:  catexample
	prompt: Enter CAT server's host name:  (localhost) (just click enter)
	prompt: Enter CAT server's port:  (8089) (just click enter)
	prompt: Enter CAT server's protocol:  (http) (just click enter)
	prompt: Would you like to contribute analytics to CAT:  (true) (just click enter)
	prompt: Enter your project's (application) path:  ./../app

	
## Build test deployment

As we told before in our JQM example code the cat automation is ready for building.

1. On the cmd : cd to cat-project
2. To build the project and start the server: 
	
	catcli -cbs
	
3. Now open you browser on http://localhost:8089/ and see the result
