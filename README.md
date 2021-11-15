# ssu-client

## Overview
The Simple Sign Up Client (hence ssu-client), is a SPA that can be used as a sign-up/login layer for existing or new applications.

As such, the project is intended to run by itself as a docker container inside a cluster, although it can be built (without Docker) and ran with nginx on a base server as well.

    TODO
    The SPA uses [Authorization Code flow with PKCE with Okta](https://developer.okta.com/docs/concepts/oauth-openid/#authorization-code-flow-with-pkce) for authentication, and the values required such as the oktaDomain, client_id and scope, are expected as environment variables.

Tooling:
- Built with React v16.8.6 
- Animations with Lottie from Airbnb


    TODO:
    - Unit and snapshot tests with Jest
    - E2E testing with Cypress

## Development Workflow

### Setup
    # Install dependencies
    npm install
    
    # Start the project
    npm start

## Docker
- You can pull this image from Dockerhub and run locally from here: https://hub.docker.com/repository/docker/mannyscontainers/react-signup

** Make sure to pull with 'base' tag

- To run on your machine:

       docker run -it --name ssu-container \
       -p 8088:8088 \
       mannyscontainers/react-signup:base

You can also test the docker build locally by building the image & running a container by running the following commands.

Alternatively, we can add this commands to .sh files and just run them instead.
    
    # Build the image
    docker build -t mannyscontainers/react-signup:base .

## Deployment
This app has been deployed to my small Vultr VPS, you can access it here: https://mannybuilds.tech/
P.S, I might keep it as the authentication for my other apps

    # TODO Further notes

## References

### Coding Style Guide
https://github.com/airbnb/javascript/tree/master/react
* opted for .js file extensions though

### Authentication Content
https://developer.okta.com/docs/concepts/oauth-openid/

### Lottie
https://lottiefiles.com/

### Favicon Generator
https://formito.com/tools/favicon

### Docker
- [General docs](https://docs.docker.com/engine/reference/run/)
- Run with .env files

> If you have many environment variables and especially if they're meant to be secret, you can use an env-file:
  
 >> $ docker run --env-file ./env.list ubuntu bash
 
  > The --env-file flag takes a filename as an argument and expects each line to be in the VAR=VAL format, mimicking the argument passed to --env.

> source: https://stackoverflow.com/questions/30494050/how-do-i-pass-environment-variables-to-docker-containers


### Misc
[Webpack CSS Loaders](https://blog.jakoblind.no/css-modules-webpack/)
