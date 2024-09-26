const quantity = Number(prompt("enter the quantity: "))
      
      let ans =
         new Promise((resolve , reject)=>{
                 if(quantity<=p.stock){
                    resolve();
                   }
                   else
                    reject();
            })
        
            function calctotal(){
          const total = quantity*p.price
              console.log("price: " + total)
          }
      
      ans.then(calctotal).then(()=>{
            console.log("Enter your info's")
        })
        
        .catch(()=>{
          console.log("error");
      })
