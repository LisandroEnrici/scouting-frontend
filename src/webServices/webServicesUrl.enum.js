const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8001'

const webServicesUrl = {
    scouts: BACKEND_URL + '/scouts'
}

export default webServicesUrl;