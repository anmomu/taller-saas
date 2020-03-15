
function Sistema(){
  this.usuarios=[];
  this.agregarUsuario=function(nick,clave,callback){

    var usr = undefined;

    if(!this.usuarios[nick]){
      this.usuarios[nick]=new Usuario(nick,clave);
      usr=this.usuarios[nick];
    }else{
      console.log("El usuario ya existe");
    }
    callback(usr);

  this.obtenerUsuarios=function(callback){
    callback(this.usuarios);
  }

  this.obtenerUsuario=function(nick){
    return this.usuarios[nick];
  }
  this.eliminarUsuario=function(nick){
    if(this.usuarios[nick]){
      delete this.usuarios[nick];
    }
    else{
      console.log("No existe ese usuario");
    }
  }
    //this.usuarios.push(new Usuario(nick,clave));
  }
}

function Usuario(nick,clave){
  this.nick=nick;
  this.clave=clave;
}

module.exports.Sistema=Sistema;
