import config from '../../config'
class UsuarioAdminService {

    getUsuarios(){
        return fetch(`${config.API_URL}admin`,{
            method : 'GET',
        })
        .then(res=>res.json())
        .then(data =>{
            return data
        })
        .catch((e) => console.log(e))
    }

    eliminarUsuario(usuario){
        return fetch(`${config.API_URL}admin/user/delete/${usuario}`,{
            method: 'GET',
        })
        .then(res=>res.json())
        .then(data =>{
            return data
        })
        .catch((e) => console.log(e))        
    }

    crearUsuario(usuario){

    }

    getDetalleUsuario(id){
        return fetch(`${config.API_URL}admin/user/show/${id}`,{
            method : 'GET',
        })
        .then(res=>res.json())
        .then(data =>{
            return data
        })
        .catch((e) => console.log(e))
    }
}



export default new UsuarioAdminService();
