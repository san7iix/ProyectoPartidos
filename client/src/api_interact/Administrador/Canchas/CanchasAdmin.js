import config from '../../config'
class CanchasAdminService {

    async GetCanchas() {
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

    async Crear(cancha) {
        try {
            const res = await fetch(`${config.API_URL}admin/place/create`, {
                method: 'POST',
                body: JSON.stringify({
                    "name": cancha.name,
                    "price": cancha.price,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })
            const data = await res.json()
            return data
        } catch (error) {
            return console.log(error)
        }
    }

    async Detalles(id) {
        try {
            const res = await fetch(`${config.API_URL}admin/place/show/${id}`, {
                method: 'GET',
            })
            const data = await res.json()
            return data
        } catch (e) {
            return console.log(e)
        }
    }

    async Editar(cancha) {

        let datos = JSON.stringify({
            "name": cancha.name,
            "price": cancha.price,
        })

        try {
            const res = await fetch(`${config.API_URL}admin/place/update/${cancha.id}`, {
                method: 'PUT',
                body: datos,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })
            const data = await res.json()
            return data
        } catch (e) {
            return console.log(e)
        }
    }


}



export default new CanchasAdminService();
