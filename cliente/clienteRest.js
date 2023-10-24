function ClienteRest(){
    this.agregarUsuario=function(nick){
        var cli=this;
        $.getJSON("/agregarUsuario/"+nick,function(data){
            let msg="";
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado");
                msg="Usuario "+nick+" ha sido registrado";
                //localStorage.setItem("nick",nick);
                $.cookie("nick",nick);
            }
            else{
                console.log("El nick ya está ocupado");
                msg="El nick "+nick+" ya está ocupado";
            }
            cw.mostrarMsg(msg);
        });
    }
    this.agregarUsuario2=function(nick){
        $.ajax({
            type:'GET',
            url:'/agregarUsuario/'+nick,
            success:function(data){
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
            }
            else{
                console.log("El nick ya está ocupado");
            }
            },
            error:function(xhr, textStatus, errorThrown){
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType:'application/json'
        });
    }
    this.obtenerUsuarios=function(){
        $.getJSON("/obtenerUsuarios",function(data){
            console.log(data);
        }); 
    }
    this.numeroUsuarios=function(){
        $.getJSON("/numeroUsuarios",function(data){
            console.log('Número de usuarios en el sistema es: '+data.num);
        });
    }
    this.usuarioActivo=function(nick){
        $.getJSON("/usuarioActivo/"+nick,function(data){
            if (data.activo){
                console.log("El usuario "+nick+" está activo");
            }
            else{
                console.log("El usuario "+nick+" NO está activo")
            }
        });
    }
    this.eliminarUsuario=function(nick){
        $.getJSON("/eliminarUsuario/"+nick,function(data){
            if (data.nick!=-1){
                console.log("El usuario "+nick+" ha sido eliminado");
            }
            else{
                console.log("El usuario "+nick+" no se ha podido eliminar")
            }
        });
    }
    this.enviarJwt=function(jwt){ 
        $.ajax({ 
            type:'POST', 
            url:'/enviarJwt', 
            data: JSON.stringify({"jwt":jwt}), 
            success:function(data){ 
                let msg="El nick "+nick+" está ocupado"; 
                if (data.nick!=-1){ 
                    console.log("Usuario "+data.nick+" ha sido registrado"); msg="Bienvenido al sistema, "+data.nick; 
                    $.cookie("nick",data.nick); 
                } 
                else{
                    console.log("El nick ya está ocupado"); 
                } 
                cw.limpiar(); 
                cw.mostrarMsg(msg); 
            }, 
            error:function(xhr, textStatus, errorThrown){ 
                //console.log(JSON.parse(xhr.responseText)); 
                console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
            }, 
            contentType:'application/json' 
            //dataType:'json' 
        }); 
    }
}