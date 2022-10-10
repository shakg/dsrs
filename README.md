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
 
 
 
