'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Come on son";
var GET_GUS_MESSAGE = "Here's your Gusism: ";
var HELP_MESSAGE = "You can say tell me a Gussim, or, you can say exit... Want a me to tell you a Gussim?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Bye!";

var data = [
    "Gus, don't be a silly goose.",
    "Gus, don't be a crazy hooligan.",
    "Gus, don't be a gooey chocolate chip cookie.",
    "Gus, don't be a rabid porcupine.",
    "Gus, don't be a giant snapping turtle.",
    "Gus, don't be a paranoid schizophrenic.",
    "Gus, don't be a gloomy you.",
    "Gus, don't be a Traveling Wilbury.",
    "Gus, don't be an incorrigible Eskimo pie with a caramel ribbon.",
    "Gus, don't be an old sponge with hair hanging off of it.",
    "Gus, don't be a myopic chihuahua.",
    "Gus, don't be exactly half of an eleven pound black forest ham.",
    "Gus, don't be William Zabka from Back To School.",
    "Gus, don't be this crevice in my arm.",
    "Gus, don't be the last of the famous international playboys.",
    "Gus, don't be principal and interest.",
    "Gus, don't be the ribs that flip over Fred Flintstone's car.",
    "Gus, don't be Harry Potter and the Prisoner or Marzipan.",
    "Gus, don't be the American adaptation of the British Gus.",
    "Gus, don't be the third Thompson Twin with the dreads.",
    "Gus, don't be  the new Meshach Taylor.",
    "Gus, don't be the iiiiiit in wait for iiiiiit.",
    "Gus, don't be Leon from the Like a Prayer video.",
    "Gus, don't be Nick Cage's accent from Con Air.",
    "Gus, don't be Topher Grace running on the beach at the end of In Good Company.",
    "Gus, don't be the ten tigers of Canton.",
    "Jules, don't be Canada.",
    "Gus, don't be George Hamilton's reaction when Ashley came to him and said, Dad, I think I'll become an actor, too.",
    "Gus, don't be the second drummer from 38 special.",
    "Gus don't be the one game at Chuck E Cheese that isn't broken.",
    "Gus, don't be Fine Young Cannibal's cover of Suspicious Minds.",
    "Gus, don't be both Ashley Simpson albums.",
    "Gus, don't be the only black lead on a major cable network.",
    "Gus, don't be your jury summons that I accidentally threw away last month along with something called a w 2.",
    "Gus, don't be the scream from Holding Back The Years.",
    "Gus, don't be Keith Sweat now.",
    "Gus, don't be the mystery mouske - tool.",
    "Gus, don't be Pete Rose's haircut.",
    "Gus, don't be Lao Che.",
    "Gus, don't be the B from apartment 23.",
    "Gus, don't be the remake of Yours, Mine and Ours. While I'm at it don't be the original either.",
    "Gus, don't be the second time ever I say your face.",
    "Gus, don't be Weepy Boy Santos.",
    "Gus, don't be the kites upon strings.",
    "Gus, don't be the Howling to your sister's a werewolf.",
    "Gus, don't be the 100th Luftballoon."
    
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewGussimIntent');
    },
    'GetNewGussimIntent': function () {
        var gusArr = data;
        var idx = Math.floor(Math.random() * gusArr.length);
        var randomGus = gusArr[idx];
        var speechOutput = GET_GUS_MESSAGE + randomGus;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomGus)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};