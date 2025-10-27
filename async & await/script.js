function resolveAfter2seconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
 console.log("resolved");
        },2000)
    })
}
async function asyncCall(){
    console.log("calling..");
    const result = await resolveAfter2seconds();
    console.log(result);
    
}
asyncCall();

/// another example...
async function makeasyncRequest(){
    const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
makeasyncRequest();