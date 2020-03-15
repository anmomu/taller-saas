
function Sistema(){
  this.usuarios=[];
  this.agregarUsuario=function(nick,clave){
    if(!this.usuarios[nick]){
      this.usuarios[nick]=new Usuario(nick,clave);
    }else{
      console.log("El usuario ya existe");
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
