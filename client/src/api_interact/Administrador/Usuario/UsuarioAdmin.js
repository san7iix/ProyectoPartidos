import config from '../../config'
class UsuarioAdminService {

    async getUsuarios() {
        try {
            const res = await fetch(`${config.API_URL}admin/user`, {
                method: 'GET',
            })
            const data = await res.json()
            return data
        } catch (e) {
            return console.log(e)
        }
    }

    async eliminarUsuario(usuario) {
        try {
            const res = await fetch(`${config.API_URL}admin/user/delete/${usuario}`, {
                method: 'GET',
            })
            const data = await res.json()
            console.log(data)
            return data
        } catch (e) {
            return console.log(e)
        }
    }

    async crearUsuario(usuario) {

        try {
            const res = await fetch(`${config.API_URL}admin/user/create`, {
                method: 'POST',
                body: JSON.stringify({
                    "name": usuario.name,
                    "email": usuario.email,
                    "role_id": usuario.role_id,
                    "password": usuario.password
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
        } catch (e) {
            return console.log(e)
        }

    }

    async getDetalleUsuario(id) {
        try {
            const res = await fetch(`${config.API_URL}admin/user/show/${id}`, {
                method: 'GET',
            })
            const data = await res.json()
            return data
        } catch (e) {
            return console.log(e)
        }
    }

    async editarUsuario(usuario) {
        
        let datos = JSON.stringify({
            "name": usuario.name,
            "email": usuario.email,
            "role_id": usuario.role_id,
            "password": usuario.password
        })

        try {
            const res = await fetch(`${config.API_URL}admin/user/update/${usuario.id}`, {
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



export default new UsuarioAdminService();
