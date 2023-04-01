
# CORS Local Server

Run this in your local to solve cors issue on the browser. 

append your api to this server.

finalURL = corsLocalServerURL + URL with CORS issue

for eg. 
#### Cors server is started on port 80 
http://localhost:80


#### Api with CORS issue
https://youtube.com/api?key=someKey&otherPathParams


### Step 1 - Add a proxy in your package.json in frontend codebase
{
     "proxy": "http://localhost:80"
}

### Step 2 - Send request to /forward api on cors-server from frontend

http://localhost:80/forward/https://youtube.com/api?key=someKey&otherPathParams


This should resolve the cors issue on local. 


