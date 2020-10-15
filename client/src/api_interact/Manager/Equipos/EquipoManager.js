import config from '../../config'

class EquipoManager {


    async Crear(equipo) {
        try {
            const res = await fetch(`${config.API_URL}manager/team/create`, {
                method: 'POST',
                body: JSON.stringify({
                    "name": equipo.name,
                    "uniform": equipo.uniform,
                    "id_manager": equipo.id_manager
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


}

export default new EquipoManager();