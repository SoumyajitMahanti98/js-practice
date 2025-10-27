// fetch('https://dummyjson.com/products').then(function(res){
//     return res.json();
// }).then(console.log);


fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'BMW',
    price: 10000000
  })
})
.then(function(res){
    return res.json();
})
.then(data => console.log(data)
)
.catch(err => console.error('Error:', err));


