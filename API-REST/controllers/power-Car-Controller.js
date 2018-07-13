var dbConnection = require('../db/config');
const connection=dbConnection();
const mysql=require('mysql');
module.exports={
    getPosts:(req,res)=>{
        const getProvidersQuery="SELECT u.nickname,p.idposts,p.Contenido,p.creacion,u.foto FROM Users u,posts p where u.idUsers=p.idUser"
        connection.query(getProvidersQuery,(error,resul)=>{
            if (error) {
               res.json({status:"Error",error})
            }else{res.json({status:"ok",resul}
                 )
            }
        })

    },
    getComments:(request,response)=>{
       const {postId}=request.params;
        const getWorkersQuery=`
        SELECT c.contenido,u.nickname,u.foto FROM Users u,comments c ,posts p
        where c.idpost=${mysql.escape(postId)} and u.idUsers=c.iduser and p.idUser=u.idUsers;`
             
         connection.query(getWorkersQuery,(error,resul)=>{
            if (error) {
               response.json({status:"Error",error})
            }else{
                
            response.json({
                status:"ok",
                resul
            });

               
            }
        })
        


        
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