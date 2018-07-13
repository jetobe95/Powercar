const {products}=require('../db.json');

module.exports={
    getPosts:(req,res)=>{
        res.json({products})
    },
    addProduct:(request,response)=>{
        // resp.send("recibido");
        console.log("Recibido");
        
         const {name}=request.body;
         // console.log("Recibido -->>"+name);
         products.push({
             name,
             id:products.length
         })
         response.json({
             "success":true,
             "msg":"succesfull added"
         });


        
     },

     updateProduct :(req,res)=>{
        
        const {id}=req.params;
        const {name}=req.body;
        products.forEach((product,i) => {
            if (product.id==Number(id)) {
                product.name=name;
                
            }
            
        });
        res.json({"actualizado":true});
   
    },
     deleteProduct:  (req,res)=>{
        const {id}=req.params;
        products.forEach((product,i) => {

            products.splice(i,1);
            
        });
        res.json({"eliminado":true})
         
     }





};