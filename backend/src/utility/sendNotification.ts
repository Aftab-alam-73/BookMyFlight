import firebase from "../firebase.js";
export const sendNotification =async () => {
    // const message = {
    //   notification: {
    //     title: title,
    //     body: body,
    //   },
    //   token: token,
    // };
  
     try{
        await firebase.messaging().send({
            token: 'eXibCBq9GQwa0guLL4Z30F:APA91bGXBeKt6wg8DJ7wEc0EYzunfnheyDOn2dE0Tu_iAIIbTtFFMaBz0fYftn48HjeeihkMgVyloRZij4Yv3WyHsdPyC5BjGjGXNZbk2uq6zZ6fQMb2prQVXvASt1J7QhWz_V6n6gAO',
            notification:{
                title: "test",
                body: "Testing the notification"
            }
        })
        console.log("Notification sent successfully")
     }catch(err:any){
        console.log("Something went wrong",err.message)
     }
  };
  