const datos=require("./cad.js");

function Sistema(test){
    this.usuarios={}; //this.usuarios=[]
    this.test=test;
    this.cad=new datos.CAD();
    this.agregarUsuario=function(nick){
        let res={"nick":-1}; 
        if (!this.usuarios[nick]){ 
            this.usuarios[nick]=new Usuario(nick);
            res.nick=nick; 
            console.log("Nuevo usuario en el sistem: "+nick);
        } 
        else{ 
            console.log("el nick "+nick+" está en uso"); 
        } return res;
    }
    this.obtenerOCrearUsuario=function(email,callback){
        this.cad.buscarOCrearUsuario(email,function(res){
            console.log("El usuario "+res.email+" está registrado en el sistema");
            callback(res);
        });
    }
    this.obtenerUsuarios=function(){
        return this.usuarios;
    }
    this.obtenerTodosNick=function(){
        return Object.keys(this.usuarios);
    }
    this.usuarioActivo=function(nick){
        //return !(this.usuarios[nick]==undefined)
        let res={activo:false};
        res.activo=(nick in this.usuarios);
        return res;
    }
    this.eliminarUsuario=function(nick){
        let res={nick:-1};
        if (this.usuarios[nick]){
            delete this.usuarios[nick];
            res.nick=nick;
            console.log("Usuario "+nick+" eliminado");
        }
        else{
            console.log("El usuario no existe");
        }
        return res;
    }
    this.numeroUsuarios=function(){
        let lista=Object.keys(this.usuarios);
        let res={num:lista.length};
        return res;
    }

    if (!this.test){
        this.cad.conectar(function(){
            console.log("Conectado a Mongo Atlas");
        });
    }
}

function Usuario(nick){
    this.nick=nick;
    this.email;
    this.clave;
}

module.exports.Sistema=Sistema;