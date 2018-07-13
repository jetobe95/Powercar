var dbConnection = require('../db/config');
const connection=dbConnection();
const mysql=require('mysql');
module.exports={
    getPost:(req,res)=>{
        const {postId}=req.params;
        const getProvidersQuery=`
        SELECT u.nickname,p.idposts,p.Contenido,p.creacion,u.foto 
        FROM Users u,posts p
        where u.idUsers=p.iduser and p.idUser=u.idUsers and
        p.idposts=${postId}`
        connection.query(getProvidersQuery,(error,resul)=>{
            if (error) {
               res.json({status:false,error})
            }else{res.json({status:true,resul}
                 )
            }
        })

    },
    getPosts:(req,res)=>{
        const getProvidersQuery="SELECT u.nickname,p.idposts,p.Contenido,p.creacion,u.foto FROM Users u,posts p where u.idUsers=p.idUser"
        connection.query(getProvidersQuery,(error,resul)=>{
            if (error) {
               res.json({status:false,error})
            }else{res.json({status:true,resul}
                 )
            }
        })

    },
    getComments:(request,response)=>{
       const {postId}=request.params;
        const getWorkersQuery=`
        SELECT c.contenido,c.creacion,u.nickname,u.foto ,c.idcomments
        FROM Users u,comments c ,posts p
        where c.idpost=${mysql.escape(postId)} 
        and u.idUsers=c.iduser and p.idUser=u.idUsers;`
             
         connection.query(getWorkersQuery,(error,resul)=>{
            if (error) {
               response.json({status:false,error})
            }else{
                
            response.json({
                status:true,
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