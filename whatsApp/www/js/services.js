app.factory('UsuarioService', function(){

    const collection = 'usuarios';

    var usuarios = JSON.parse(window.localStorage.getItem('collection') || '[]');

    var persistir = function(){
        window.localStorage.setItem('collection', JSON.stringify(usuarios));
    }
    /*var usuarios = [
        {
            id: 1,
            name: 'Fulano',
            email: 'fulano@email.com'
        },
        {
            id: 2,
            name: 'Ciclano',
            email: 'Cicrano@email.com'
        },
        {
            id: 3,
            name: 'Zé',
            email: 'zesilva@email.com'
        }
    ]*/

    return {

        readAll : function(){
            return usuarios; 
        },
        read : function(id) {
            for(var i = 0; i < usuarios.length; i++){
                if(usuarios[i].id == id) {
                    return angular.copy(usuarios[i]);
                }
            }
        },

        delete : function(id) {

            for(var i=0; i < usuarios.length; i++){
                if(usuarios[i].id == id) {
                    usuarios.splice(i, 1);
                    persistir();
                    return;
                }
            }
        },

        create : function(usuario){
            usuario.id= new Date().getTime();
            usuarios.push(usuario);
            persistir();
        },

        update: function(usuario){
            
            for(var i=0; i < usuarios.length; i++){
                if(usuarios[i].id == usuario.id) {
                    usuarios[i]=usuario;
                    persistir();
                    return;
                }
            }
        }

    }

});