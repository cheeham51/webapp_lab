const axios = require('axios');
// require('dotenv').config()

test("service returns 'Hello there!'", async () => {
    try {
        const response = await axios.get(process.env.SERVICE_ENDPOINT, {})
        expect(response.data).toBe("Hello there!")
    } catch (e) {
        console.error(e)
        throw e
    }
})