import config from '../../config'

class EquipoManager {


    async Crear(equipo) {
        try {
            const res = await fetch(`${config.API_URL}manager/storeTeam`, {
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


    async CreateMatch(datos) {
        try {
            const res = await fetch(`${config.API_URL}manager/match/createMatch `, {
                method: 'POST',
                body: JSON.stringify({
                    "id_team_1": datos.id_team_1,
                    "id_team_2": datos.id_team_2,
                    "id_place": datos.id_place,
                    "date": datos.date,
                    "hour": datos.hour
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

    
    async AddPlayer(id_team,id_player) {
        try {
            const res = await fetch(`${config.API_URL}manager/addPlayer/${id_team}/${id_player}`, {
                method: 'POST',
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
    
    async GetEquipo(id_manager) {
        try {
            const res = await fetch(`${config.API_URL}manager/showTeam/${id_manager}`, {
                method: 'GET',
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

    async GetFreePlayers(){
        try {
            const res = await fetch(`${config.API_URL}manager/searchPlayers`, {
                method: 'GET',
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
    
    async GetPlayers(id_team){
        try {
            const res = await fetch(`${config.API_URL}manager/showTeamPlayers/${id_team}`, {
                method: 'GET',
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
    
    async GetMatchsPending(id_team){
        try {
            const res = await fetch(`${config.API_URL}manager/showMatchesPending/${id_team}`, {
                method: 'GET',
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
    
    async DeletePlayer(id_team, id_player){
        try {
            const res = await fetch(`${config.API_URL}manager/removePlayer/${id_team}/${id_player}`, {
                method: 'PUT',
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