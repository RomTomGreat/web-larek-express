const {
    PORT = 3000,
    // #DB_ADDRESS: mongodb://root:example@mongo:27017/ - использовть эту переменную окружения, если запускаем в Docker
    DB_ADDRESS = 'mongodb://127.0.0.1:27017/weblarek',
    UPLOAD_PATH = 'images',
    UPLOAD_PATH_TEMP = 'temp',
    ORIGIN_ALLOW = 'http://localhost:5173',
    AUTH_REFRESH_TOKEN_EXPIRY = '7d',
    AUTH_ACCESS_TOKEN_EXPIRY = '1m'
} = process.env;