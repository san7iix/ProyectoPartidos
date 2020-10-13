import config from '../../config'
class UsuarioAdminService {

    getUsuarios() {
        return fetch(`${config.API_URL}admin`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((e) => console.log(e))
    }

    eliminarUsuario(usuario) {
        return fetch(`${config.API_URL}admin/user/delete/${usuario}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data
            })
            .catch((e) => console.log(e))
    }

    crearUsuario(usuario) {

        return fetch(`${config.API_URL}admin/user/create`, {
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
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((e) => console.log(e))

    }

    getDetalleUsuario(id) {
        return fetch(`${config.API_URL}admin/user/show/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((e) => console.log(e))
    }

    editarUsuario(usuario) {
        return fetch(`${config.API_URL}admin/user/update/${usuario.id}`, {
            method: 'PUT',
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
                'Access-Control-Allow-Methods': '*'
            }

        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((e) => console.log(e))
    }
}



export default new UsuarioAdminService();
