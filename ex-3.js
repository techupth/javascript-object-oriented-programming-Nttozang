//  Start coding here 
class User {
    constructor(id,name,email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class postList {
    constructor() {
        this.posts = [];
    }
    addPost(post) {
        this.posts.push(post);
    }
    sharePost(post) {
        console.log(`You've shared post ${post.title} to your friend.`)
    }
}

class Post {
    constructor(id,title,content,comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(comment) {
        this.comment.push(comment)
    }
}

class Comment {
    constructor(id,content,createdBy,like) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike() {
        this.like++;
    }
}

class Facebook {
    constructor() {
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(FacebookGroup ) {
        this.groupList.push(FacebookGroup);
    }
    addPage(FacebookPage) {
        this.pageList.push(FacebookPage);
    }
}

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}

class Notification {
    constructor(id) {
        this.id = id;
    }
    send(comment,post) {
        console.log(`Notification: ${comment.createdBy} has just commented on this post—${post.title}`);
    }
}

const user1 = new User("1", "N001", "N001.com");
console.log(user1);

const post1 = new Post("1", "First Post", "first post content.",);
console.log(post1);

const postList1 = new postList();
postList1.addPost(post1);
console.log(postList1);

const comment1 = new Comment("comment001", "Nice comment", "N002");
post1.addComment(comment1);
console.log(comment1);

comment1.addLike();
console.log(comment1.like);

postList1.sharePost(post1);

const group1 = new FacebookGroup("First Group");
console.log(group1);

const page1 = new FacebookPage("First Page");
console.log(page1)

const facebook = new Facebook();
facebook.addGroup(group1);
facebook.addPage(page1);
console.log(facebook);

const notification1 = new Notification("1");
console.log(notification1);

notification1.send(comment1, post1);
