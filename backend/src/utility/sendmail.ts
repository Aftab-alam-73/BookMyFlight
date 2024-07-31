import nodemailer from 'nodemailer';


export const sendMail = (passenger:any)=>{
  const notifications=[
    {
        "notification_id": "1",
        "flight_id": `${passenger.flight.flight_number}`,
        "message": `Your flight ${passenger.flight.flight_number} is on time. Departure gate: ${passenger.flight.departure_gate}.`,
        "timestamp": "2024-07-26T13:00:00Z",
        "method": "SMS",
        "recipient": "+1234567890"
    },
    {
        "notification_id": "2",
        "flight_id": `${passenger.flight.flight_number}`,
        "message": `Your flight ${passenger.flight.flight_number} delayed. New departure time: 2024-07-26T17:00:00Z. Departure gate: ${passenger.flight.departure_gate}.`,
        "timestamp": "2024-07-26T15:30:00Z",
        "method": "Email",
        "recipient": "user@example.com"
    },
    {
        "notification_id": "3",
        "flight_id": `${passenger.flight.flight_number}`,
        "message": `Your flight ${passenger.flight.flight_number} has been cancelled.`,
        "timestamp": "2024-07-26T11:00:00Z",
        "method": "App",
        "recipient": "user_app_id_12345"
    }
  ]
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port:465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    let index=0;
    if(passenger.flight.status=="Delayed"){
      index=1;
    }else if(passenger.flight.status=="Cancelled"){
      index=2;
    }
    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: `${passenger.email}`,
      subject: 'Your Flight Updates!',
      text: `Dear Passenger ${passenger.firstName} 
             This is an update regarding your flight booking with ${passenger.flight.airline}
             ${notifications[index].message}
            Thank You.
            `
    };
  
    transporter.sendMail(mailOptions, (error:any, info:any) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
