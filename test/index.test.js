const axios = require('axios');

test("service returns 'Hello there!'", async () => {
    try {
        console.log(test)
        const response = await axios.get(process.env.SERVICE_ENDPOINT, {})
        expect(response.data).toBe("Hello there!--")
    } catch (e) {
        console.error(e)
        throw e
    }
})