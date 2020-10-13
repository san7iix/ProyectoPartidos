import config from '../../config'
class CanchasAdminService {

    async GetCanchas(){
        try {
            const res = await fetch(`${config.API_URL}admin/place`, {
                method: 'GET',
            })
            const data = await res.json()
            return data
        } catch (e) {
            return console.log(e)
        }
    }

    async Eliminar(id) {
        try {
            const res = await fetch(`${config.API_URL}admin/place/delete/${id}`, {
                method: 'GET',
            })
            const data = await res.json()
            return data
        } catch (e) {
            return console.log(e)
        }
    }


}



export default new CanchasAdminService();
