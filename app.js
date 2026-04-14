 const nums = [1, 2, 3, 4, 5, 6];
 let data = []
 nums.map((n)=>{
    if(n%2 === 0){
        let d = n*n
        data.push(d)
    }
 })
 console.log(data)

 const products = [
  { name: "A", price: 100, inStock: true },
  { name: "B", price: 200, inStock: false },
  { name: "C", price: 300, inStock: true }
];

products.filter((f) =>{
    let cb = f.inStock
    if(cb === true){
        let data = f.price
        console.log(data)
        
        
    }
})