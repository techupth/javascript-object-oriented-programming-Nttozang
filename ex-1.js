class EmailNotification {
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`"Notification has been sent to ${this.receiver}"`)
    }
}

class SMSNotification {
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`"Notification has been sent to ${this.phoneNumber}"`)
    }
 }

 const myEmail = new EmailNotification("12345","12:00:00","Hello","Nttozang.mail.com");
 myEmail.send();

 const myphoneNumber = new EmailNotification("12345","12:00:00","Hello","0987321456");
 myphoneNumber .send();