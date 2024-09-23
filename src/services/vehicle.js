import axios from 'axios'
const baseUrl = '/api'

const security = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${sessionStorage.getItem('bearer-token')}` }
}

const decodeVIN = (vin) => {
    const request = axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
    return request.then(response => response.data)
}

const getAllVehicles = () => {
    const request = axios.get(`https://dryvetracktest20240922183800.azurewebsites.net/api/Car/mycars`, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const getVehicleByOwnerAndVin = (vin) => {
    const request = axios.get(`https://dryvetracktest20240922183800.azurewebsites.net/api/Car/${vin}`, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const updateVehicleMileage = (vin, newMileage) => {
    const request = axios.put(`https://dryvetracktest20240922183800.azurewebsites.net/api/Car/updateMileage/${vin}`, newMileage, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}


const getInsuranceDetails = (vin) => {
    const request = axios.get(`https://dryvetracktest20240922183800.azurewebsites.net/api/Insurance/getInsuranceByVin/${vin}`, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const updateInsuranceDetails = (vin, obj) => {
    const request = axios.put(`https://dryvetracktest20240922183800.azurewebsites.net/api/Insurance/updateInsuranceByVin/${vin}`, obj, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const addVehicleByOwner = (obj) => {
    const request = axios.post(`https://dryvetracktest20240922183800.azurewebsites.net/api/Car/addCar`, obj, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const updateVehicle = (id, obj, userId) => {
    const request = axios.put(baseUrl + `/update-vehicle/${id}`, { obj, userId }, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const deleteVehicle = (id) => {
    const request = axios.delete(`https://dryvetracktest20240922183800.azurewebsites.net/api/Car/delete/${id}`, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}



export { getAllVehicles, addVehicleByOwner, updateVehicle, deleteVehicle, decodeVIN, getVehicleByOwnerAndVin, updateInsuranceDetails, getInsuranceDetails, updateVehicleMileage}