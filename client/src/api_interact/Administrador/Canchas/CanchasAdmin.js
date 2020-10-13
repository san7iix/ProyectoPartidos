import config from '../../config'
class CanchasAdminService {

    GetCanchas(){
        return fetch(`${config.API_URL}admin/places`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((e) => console.log(e))
    }


}



export default new CanchasAdminService();
