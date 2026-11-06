function users(){return JSON.parse(localStorage.getItem("ajaymart_users")||"[]")}
function saveUsers(u){localStorage.setItem("ajaymart_users",JSON.stringify(u))}
function getOrders(){return JSON.parse(localStorage.getItem("ajaymart_orders")||"[]")}
function saveOrders(o){localStorage.setItem("ajaymart_orders",JSON.stringify(o))}
function seed(){
 let u=users();
 if(!u.some(x=>x.email==="ajay@ajaymart.com"))u.push({name:"Ajay Kumar Talari",email:"ajay@ajaymart.com",password:"Ajay@123",role:"ceo",card:"Visa •••• 4242",address:"AjayMart, Kurnool, Andhra Pradesh, India"});
 if(!u.some(x=>x.email==="customer@ajaymart.com"))u.push({name:"Demo Customer",email:"customer@ajaymart.com",password:"Customer@123",role:"user",card:"Mastercard •••• 1881",address:"Kurnool, Andhra Pradesh, India"});
 saveUsers(u);
 let o=getOrders();
 if(!o.length){
  const demoProducts=typeof products!=="undefined"?products:[];
  const item=(id,q)=>{let p=demoProducts.find(x=>x.id===id)||{id,name:"Grocery Item",category:"Groceries",unit:"1 pack",price:100,image:""};return {id:p.id,name:p.name,category:p.category,unit:p.unit,price:p.price,qty:q,image:p.category==="Snacks"?"images/snacks.jpg":p.image}};
  o=[
   {id:"AJM1001",userEmail:"customer@ajaymart.com",userName:"Demo Customer",date:"10/08/2026",items:[item(1,2),item(9,1)],total:typeof products!=="undefined"?products[0].price*2+products[8].price:340,status:"Delivered",payment:"Mastercard •••• 1881",address:"Kurnool, Andhra Pradesh, India"},
   {id:"AJM1002",userEmail:"customer@ajaymart.com",userName:"Demo Customer",date:"12/08/2026",items:[item(25,1),item(31,2)],total:typeof products!=="undefined"?products[24].price+products[30].price*2:500,status:"Pending",payment:"Mastercard •••• 1881",address:"Kurnool, Andhra Pradesh, India"},
   {id:"AJM1003",userEmail:"ravi@example.com",userName:"Ravi Kumar",date:"11/08/2026",items:[item(2,3),item(15,1)],total:typeof products!=="undefined"?products[1].price*3+products[14].price:620,status:"Delivered",payment:"COD",address:"Kurnool, Andhra Pradesh, India"},
   {id:"AJM1004",userEmail:"sneha@example.com",userName:"Sneha Reddy",date:"12/08/2026",items:[item(37,1),item(38,2)],total:typeof products!=="undefined"?products[36].price+products[37].price*2:480,status:"Pending",payment:"Demo Card •••• 7788",address:"Kurnool, Andhra Pradesh, India"},
   {id:"AJM1005",userEmail:"anil@example.com",userName:"Anil Sharma",date:"13/08/2026",items:[item(4,1),item(20,2)],total:typeof products!=="undefined"?products[3].price+products[19].price*2:550,status:"Delivered",payment:"COD",address:"Kurnool, Andhra Pradesh, India"}
  ];
  saveOrders(o);
 }
}
function login(){let e=document.getElementById("email").value.trim().toLowerCase(),p=document.getElementById("password").value,u=users().find(x=>x.email===e&&x.password===p);if(!u){document.getElementById("msg").textContent="Invalid email or password.";return}localStorage.setItem("ajaymart_session",JSON.stringify(u));location.href="account.html"}
function register(){let u=users(),n=document.getElementById("rname").value.trim(),e=document.getElementById("remail").value.trim().toLowerCase(),p=document.getElementById("rpass").value;if(p.length<6){document.getElementById("msg2").textContent="Password needs at least 6 characters.";return}if(u.some(x=>x.email===e)){document.getElementById("msg2").textContent="Email already registered.";return}let nu={name:n,email:e,password:p,role:"user",card:"Demo Card •••• 4242",address:"Kurnool, Andhra Pradesh, India"};u.push(nu);saveUsers(u);localStorage.setItem("ajaymart_session",JSON.stringify(nu));location.href="account.html"}
function logout(){localStorage.removeItem("ajaymart_session");location.href="login.html"}
document.addEventListener("DOMContentLoaded",seed);
