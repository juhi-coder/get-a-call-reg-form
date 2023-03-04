function createPost(){
    return new Promise((resolve,reject)=>{

    })
}

const userPost={
    name:"juhi",
    lastActivity:'13-04-2023'
};

function updateLastUserActivityTime (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            userPost.lastActivity=new Date().getTime();
            resolve(userPost.lastActivity)
        },1000)
    })
}
Promise.all([createPost(),updateLastUserActivityTime()]).then(([createPostresolve,updateLastUserActivityTime])=>{
console.log(updateLastUserActivityTime);
}).catch(msg=>console.log(msg));