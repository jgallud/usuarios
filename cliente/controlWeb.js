function ControlWeb(){
    this.comprobarSesion=function(){
        //let nick=localStorage.getItem("nick");
        let nick=$.cookie("nick");
        if (nick){
            cw.mostrarMsg("Bienvenido al sistema, "+nick);
        }
        else{
            cw.mostrarAgregarUsuario();
            cw.init();
        }
    }
    this.mostrarAgregarUsuario=function(){
        $('#mAU').remove();
        let cadena='<div id="mAU" class="form-group">';
        cadena=cadena+'<label for="nick">Introduce el nick:</label>';
        cadena=cadena+'<input type="text" class="form-control" id="nick">';
        cadena=cadena+'<button id="btnAU" type="submit" class="btn btn-primary">Submit</button>';
        cadena=cadena+'<p><a href="/auth/google"><img src="./cliente/img/btn_google_signin_light_focus_web@2x.png" style="height:40px;"></a></p>';
        cadena=cadena+'</div>';

        $("#au").append(cadena); //au = agregar usuario

        $("#btnAU").on("click",function(){
            let nick=$("#nick").val();
            if (nick){
                $('#mAU').remove();
                rest.agregarUsuario(nick);
            }
        });
    }
    this.init=function(){ 
        let cw=this; 
        google.accounts.id.initialize({ 
            client_id:"xxxxxxxxxxxxxxx", //prod 
            auto_select:false, callback:cw.handleCredentialsResponse 
        }); 
        google.accounts.id.prompt(); 
    }
    this.handleCredentialsResponse=function(response){ 
        let jwt=response.credential; 
        // let user=JSON.parse(atob(jwt.split(".")[1])); 
        // console.log(user.name); 
        // console.log(user.email); 
        // console.log(user.picture); 
        rest.enviarJwt(jwt); 
    }
    this.mostrarMsg=function(msg){
        $('#mMsg').remove();
        let cadena='<h3 id="mMsg">'+msg+'</h3>';
        $('#msg').append(cadena);
    }
    this.salir=function(){
        //localStorage.removeItem("nick");
        $.removeCookie("nick");
        location.reload();
    }
    this.limpiar=function(){
        $("#mAU").remove();
    }  
}