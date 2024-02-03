# CourseGPT front-end

This project was created by [Create React App](https://github.com/facebook/create-react-app) and [Material-UI](https://mui.com/material-ui/).


### Install dependencies
To run the project, first install the dependencies in `package.json` by:
```shell
    npm install
```


### Set environmental variables
copy the `.example-env` file to a new file named `.env` by:
```shell
    cp .example-env .env
```
then set the parameters properly in the `.env` file.
 

### Run the project
run the React project by:
```shell
    npm start
```


# Important note 
If the session is not storing under localhost:3000 then make sure that you're accessing your front-end application through 127.0.0.1:3000. If you access the front-end application through localhost and if your backend is running on 127.0.0.1 then the session cookie will be set to 127.0.0.1, so changing the front-end URL from localhost:3000 to 127.0.0.1:3000 will solve your problem.