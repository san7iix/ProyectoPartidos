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


}



export default new UsuarioAdminService();
