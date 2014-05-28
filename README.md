# Getting started with catjs & jQueryMobile

**catjs is a new open source automation framework for mobile-web applications testing**  
Check out the catjs page [http://catjsteam.github.io/](http://catjsteam.github.io/)  
Or try [npm page](https://www.npmjs.org/package/catjs) and [github page](https://github.com/catjsteam/catjs)  
You see [full demo](http://catjsteam.github.io/examples/jqm/index.html) on jqm-kitchen-sink  

## Setup your environment

Download and open the zip or use git clone.  
Copy to:
	
	{select.path}/catjs-jqm-seed
	

### Install node.js

First you need to download and install [node.js](http://nodejs.org/)  

_**If you are working throw proxy**_
Open the cmd:

	npm config set proxy http://proxy.company.com:8080
	npm config set https-proxy http://proxy.company.com:8080


### Install catjs

Open the cmd : 
	
	cd {select.path}/catjs-jqm-seed
	npm install -g catjs


## Build test deployment

As we told before in our JQM example code the cat automation is ready for building.
To build the project and start the server, On the cmd: 

	cd to cat-project
	catcli -cbs
	
Now open you browser on [http://localhost:8089/](http://localhost:8089/) and see the result  
  
  
  
### Note - If you already have html5 app code and wants to create a new catjs-project

This example regardes to an application in the path of:

	{select.path}/{appName}

Open the cmd:
	
	cd {select.path}
	catcli --init
	prompt: Enter the project name:  catexample
	prompt: Enter CAT server's host name:  (localhost) (just click enter)
	prompt: Enter CAT server's port:  (8089) (just click enter)
	prompt: Enter CAT server's protocol:  (http) (just click enter)
	prompt: Would you like to contribute analytics to CAT:  (true) (just click enter)
	prompt: Enter your project's (application) path:  ./../app

return to **Build test deployment**

Before
![alt text](https://github.com/ransnir/catjs-jqm-seed/index.png "index.html")
catjs in action
![alt text](https://github.com/ransnir/catjs-jqm-seed/cat_in_action.png "catjs in action")

