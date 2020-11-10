# Voice First AI Template: Timesheet Assistant

This template contains a Voice First + Jovo Sample Voice App with Google Sheets API Integration, asking for the user's project they are working on & tasks completed and returning an SSML message. This is the default template for all new Voice First Coders & Software Engineers.

## Timesheet Quest
* [Setup Terminal (Windows-only)](#setup-terminal).
* [Setup Jovo](#setup-jovo).
* [Download Code](#download-code).
* [Create Google Sheet](#create-google-sheet).
* [Download Google Sheet API Credentials](#download-google-sheet-api-credentials).
* Setup gactions cli.
* Create Google Assistant.
* Deploy to Google using Jovo cli.
* Test on Device.
* Publish Submission Video to Youtube & TikTok & Twitter.

## Setup Terminal
1. Download git bash [here](https://git-scm.com/downloads). 
2. Open git bash anytime you need to use your terminal.

## Setup Jovo

To use the Voice First + Jovo Templates, you'll need the Jovo CLI. You can install it globally with NPM.

```sh
$ npm install -g jovo-cli
```

After installing the Jovo CLI check for successful install.
```sh
$ jovo -v
```
which should return a version #
```sh
Jovo CLI Version: 3.0.28
```
If you get an error, please ping Sweets in Voice First Slack channel.

## Download Code
After successfully installing the Jovo CLI, you can install the template using one of the following commands:

```sh
$ git clone https://github.com/Voice-First-AI/timesheet-assistant-google-sheets.git
```

Change your working directory into your newly created project directory and run your voice app:
```sh
$ cd timesheet-assistant-google-sheets

$ npm i

# Run voice app, optionally with a --watch flag to restart on code changes.
$ jovo run [-w]
```

> Read more about `jovo run` [here](https://www.jovo.tech/marketplace/jovo-cli#jovo-run).

## Create Google Sheet
1. Open Template Google Sheet [here](https://docs.google.com/spreadsheets/d/1wsQJyAI_fxF5_3gMYT_a4Rv0g9SwNa8wte9V0Rq_3II/edit?usp=sharing).
2. File -> Make a Copy -> OK.
(Now in your newly copied spreadsheet)
3. Share -> Change (Get link section) -> Anyone with the link -> Editor (this allows your code to both read & write to the timesheet).
4. Copy the spreadsheet id (found in url https://docs.google.com/spreadsheets/d/<your-spreadsheet-id/edit#gid=0)
5. Paste your spreadsheet id on `line 25` of `src/app.js`
6. Save changes to your code.

## Download Google Sheet API Credentials
1. Follow Google's Documentation [here](https://developers.google.com/sheets/api/guides/authorizing#APIKey).
There are a few `TODO` comments scattered in the following files:
* `project.js`
* `app.js`

Make sure you fix those `TODOS`!

## Next Steps

### Deploy to Google Assistant
Now that you got the template running on the Jovo Debugger, it is time to deploy your voice app to Google Assistant! You can find a tutorial for deploying [here](https://www.jovo.tech/tutorials/google-conversational-actions-getting-started).

## About Jovo

Jovo is the most popular development framework for voice, including platforms like Alexa, Google Assistant, mobile apps, and Raspberry Pi.

To see what else you can do with the Jovo Framework, take a look at the [Jovo Documentation](https://www.jovo.tech/docs/).

-   [Jovo Website](https://jovo.tech/)
-   [Documentation](https://jovo.tech/docs/)
-   [Marketplace](https://www.jovo.tech/marketplace/)
-   [Twitter](https://twitter.com/jovotech/)
-   [Forum](https://community.jovo.tech/)
