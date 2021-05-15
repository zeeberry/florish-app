# Florish App

![Vercel](https://vercelbadge.vercel.app/api/zeeberry/florish-app?style=flat-square)

A tech-enabled job interview coaching platform for software engineers.

## Motivation

Interviewing for a software engineering job is initimidating, especially if you're just getting started. We created this tool to help folks realize their potential, ace their interviews and get dope ass jobs in tech.

## Features

- Track your interview notes
- Reflect on your interview experiences
- Get insightful data about your interviews
- Understand what to expect in every interview you have scheduled
- Get expert-curated tips on how to best prepare for your interviews.

## Tech Used

- ReactJS
- NextJS
- FaunaDB
- GraphQL
- Sendgrid
- Vercel
- Styled Components
- Storybook
- Jest

## Style Notes

Use semicolons. LOL
I have to add a linter and formatter at some point.

## Installation

### Clone the repo

`git clone git@github.com:zeeberry/florish-app.git`

### Check that you have node and npm installed

To check if you have Node.js installed, run this command in your terminal:

`node -v`

Make sure to have at least node version 15

To confirm that you have npm installed you can run this command in your terminal:

`npm -v`

npm is a separate project from Node.js, and tends to update more frequently. As a result, even if you’ve just downloaded Node.js (and therefore npm), you’ll probably need to update your npm. To update your npm, type this into your terminal:

`npm install npm@latest -g`

### Install dependencies

To install dependencies make sure you're on the root directory of the project and run this command in your terminal:

`npm install`

### Set environment variables
You'll need to set environment variables for FaunaDB, Sendgrid and Magic, as well as an encryption secret for user authorization. 

1. Ask for your unique keys. 

2. Once you have your keys, create an `.env` file on the root directory. Add the below code, where `<KEY>` should be replaced with the unique key you were given.

```
NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT='https://graphql.fauna.com/graphql'
NEXT_PUBLIC_FAUNADB_SECRET=<KEY>
NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY=<KEY>
MAGIC_SECRET_KEY=<KEY>
ENCRYPTION_SECRET=<KEY>
SENDGRID_API_KEY=<KEY>
```

### Start dev server

To start your local dev server run this command in your terminal:

`npm run dev`

### Voila!

The server renders on:

`http://localhost:3000`

## Notes

This project was started off from [this template](https://github.com/vercel/next.js/tree/master/examples/with-styled-components)
