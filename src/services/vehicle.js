import axios from 'axios'
const baseUrl = 'http://localhost:3000/api'

const security = {
    headers: { 'x-auth-token': sessionStorage.getItem('x-auth-token') }
}

const getAllVehicles = () => {

    const request = axios.get(baseUrl + '/vehicle-info', security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const addVehicle = (obj) => {
    const request = axios.post(baseUrl + '/add-vehicle', obj, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const updateVehicle = (id, obj, userId) => {
    console.log(id)
    const request = axios.put(baseUrl + `/update-vehicle/${id}`, { obj, userId }, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const deleteVehicle = (userId, obj) => {
    const request = axios.put(baseUrl + '/delete-vehicle', {userId, obj}, security )

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}



export { getAllVehicles, addVehicle, updateVehicle, deleteVehicle }