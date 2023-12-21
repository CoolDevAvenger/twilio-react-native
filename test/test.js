const accountSid = "ACfd2241f95309ee654ab2d6d713e4e21e";
const authToken = "bf54a6d0c06a455ef754c9eb3f639a76";
const client = require('twilio')(accountSid, authToken);

// client.calls
//     .create({
//         url: 'http://demo.twilio.com/docs/voice.xml',
//         to: '+15169459137',
//         from: '+15855662720'
//     })
//     .then(call => console.log(call.sid));

// client.calls
//     .create({
//         twiml: '<Response><Say>Hi, Brandy. This is a Twilio virtual voice call. Hope you\'re doing great! Regards, Robert</Say></Response>',
//         to: '+15169459137',
//         from: '+17058056125'
//     })
//     .then(call => console.log(call.sid));

// client.calls
//     .create({
//         url: 'http://demo.twilio.com/docs/classic.mp3',
//         to: '+15169459137',
//         from: '+17058056125'
//     })
//     .then(call => console.log(call.sid));

// client.calls
//     .create({
//         twiml: `<Response>
//             <Say voice="Polly.Amy">Hi, Brandy. This is a Twilio virtual voice call. Hope you\'re doing great! Regards, Robert</Say>
//             <Play>https://demo.twilio.com/docs/classic.mp3</Play>
//         </Response>`,
//         to: '+15169459137',
//         from: '+17058056125'
//     })
//     .then(call => console.log(call.sid));

// client.calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
//     .update({ twiml: '<Response><Say>Ahoy there</Say></Response>' })
//     .then(call => console.log(call.to));

