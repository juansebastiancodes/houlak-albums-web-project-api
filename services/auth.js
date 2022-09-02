
const { default: axios } = require('axios');

module.exports.getToken = async function () {
    const tokenUrl = process.env.TOKEN_URL;
    const authToken = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`, 'utf-8').toString('base64');
    const data = 'grant_type=client_credentials';
    const response = await axios.post(tokenUrl, data,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authToken}`
            }
        }
    );

    return response.data.access_token;
};
