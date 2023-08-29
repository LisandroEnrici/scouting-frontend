const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000'

const webServicesUrl = {
    scouts: BACKEND_URL + '/scouts'
}

export default webServicesUrl;