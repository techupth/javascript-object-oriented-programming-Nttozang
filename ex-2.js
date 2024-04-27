class Notification { 
    constructor(notificationId,createdTime,content,receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver= receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification{ 
    constructor(notificationId,createdTime,content,receiver) {
        super(notificationId,createdTime,content,receiver)
    }
  
}

class SMSNotification extends Notification { 
    constructor(notificationId,createdTime,content,receiver) {
        super(notificationId,createdTime,content,receiver)
    }
  
}

const myEmail = new EmailNotification("12345","12:00:00","Hello","Nttozang.mail.com");
myEmail.send();

const myphoneNumber = new EmailNotification("12345","12:00:00","Hello","0987321456");
myphoneNumber .send();