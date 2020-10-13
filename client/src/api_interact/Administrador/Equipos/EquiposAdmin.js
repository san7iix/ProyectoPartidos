import config from '../../config'
class EquipoAdminService {

    async getEquipos() {
        try {
            const res = await fetch(`${config.API_URL}admin/team`, {
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
            const res = await fetch(`${config.API_URL}admin/team/delete/${id}`, {
                method: 'GET',
            })
            const data = await res.json()
            return data
        } catch (e) {
            return console.log(e)
        }
    }

    async Crear(equipo) {
        try {
            const res = await fetch(`${config.API_URL}admin/team/create`, {
                method: 'POST',
                body: JSON.stringify({
                    "name": equipo.name,
                    "uniform": equipo.uniform,
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
            const res = await fetch(`${config.API_URL}admin/team/show/${id}`, {
                method: 'GET',
            })
            const data = await res.json()
            return data
        } catch (e) {
            return console.log(e)
        }
    }

    async Editar(equipo) {

        let datos = JSON.stringify({
            "name": equipo.name,
            "uniform": equipo.uniform,
        })

        try {
            const res = await fetch(`${config.API_URL}admin/team/update/${equipo.id}`, {
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

export default new EquipoAdminService();
