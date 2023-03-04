const preMovie =async()=>{

const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
});

const getPopCorn=  new Promise((resolve,reject)=>resolve('popcorn'));
const getButter=new Promise((resolve,reject)=>resolve('butter'));
const getcoke=new Promise((resolve,reject)=>resolve('colddrinks'));
let ticket=await promiseWifeBringingTicks;
let[popcorn,butter,coke]=await Promise.all([getPopCorn,getButter,getcoke]);
console.log('${popcorn},${butter},${coke}');
return ticket;
}
preMovie().then((m)=>console.log('person3:shows${m}'));