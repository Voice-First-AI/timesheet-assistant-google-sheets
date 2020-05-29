'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

//GOOGLE SPREADSHEET CONFIG
const { GoogleSpreadsheet } = require('google-spreadsheet');
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1_lXLitZ6mpTBT6tkRT7noBDq0yMePa40yHmscplXmkY');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    async LAUNCH() {
        // load directly from json file if not in secure environment
        await doc.useServiceAccountAuth(require('./jovo-google-sheets-credentials.json'));
        await doc.loadInfo(); // loads sheets
        this.ask("Welcome to your timesheet assistant. Where are you working today?")
    },

    async CatchAllIntent() {
        const userInput = this.$inputs.anything.value;
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; //Returns the month (from 1-12)
        const date = now.getDate();
        const dayIndex = now.getDay();
        const hour = now.getHours();
        const minute = now.getMinutes() / 60; //Returns the minute (from 0-1)
        const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        const dayOfWeek = daysOfWeek[dayIndex];
        const clockInRow = await doc.sheetsByIndex[0].addRow({ Day: dayOfWeek, Date: month + "/" + date + "/" + year , Arrival: hour+minute, Location: userInput}); 
        return this.tell('Hello World');
    }
});
 

module.exports.app = app;
