# DSRS
DSRS : Dead Simple Release Server 

# Why
Because I believe just to get your binary/executable/packaged application, you don't have to have jenkins/gitlab runner etc. or other infrastructure as code service.

# How 
 - You simply configure a webhook in your VCS (Gitlab, Github, Bitbucket etc.)
 - Configure location of prep script in DSRS settings.
 - Configure location of build script in DSRS settings.
 - Configure location of release folder in DSRS settings.
 and thats it. Now you can see automatically published binary/executable/packaged applications in releases page. Based on your configuration, when a webhook triggers, your DSRS will run. 
 
# How to setup development env
 - Clone the repo `git clone <repo-url>`
 - Navigate to repo folder & `npm install`
 - İnstall angular cli globally `npm install -g @angular/cli`
 - Install express `npm install express`
 - run `ng serve` or `npm run start` to start frontend in watch mode aka angular serve mode
 - run `node server/index.js` to start backend :point_right: requires express to be installed. 
and thats it, you are good to go.

# How to contribute
DSRS repo and it's maintainers use conventional commit metodology when commiting. 
