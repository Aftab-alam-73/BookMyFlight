import twilio from 'twilio';

export const sendSms=async()=>{
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    
    client.messages.create({
      body: 'Hello from BookMyFlight',
      from: process.env.FROM_NUMBER ,// Your Twilio number
      to: '+916386829454'    // Recipient's phone number
    }).then(message => console.log(message.sid))
      .catch(err => console.error(err));

}