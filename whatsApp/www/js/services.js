app.factory('UsuarioService', function(){

    var usuarios = [
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
    ]

    return {

        readAll: function(){
            return usuarios; 
        },
        read: function(id) {
            for(var i = 0; 1 < usuarios.length; i++){
                if(usuarios[i].id == id) {
                    return usuarios[i];
                }
            }
        },

        delete: function(id) {

            for(var i=0; 1 < usuarios.length; i++){
                if(usuarios[i].id == id) {
                    usuarios.splice(i, 1);
                    return;
                }
            }
        },

        create : function(usuario){
            usuario.id= new Date().getTime();
            usuarios.push(usuario);
        }

    }

});