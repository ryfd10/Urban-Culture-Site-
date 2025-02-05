const request = require('supertest')
const { app } = require('../../app')

describe('GET', () => {
    describe('/all', () => {
        it('should get all the citizens between the skip and count values', async () => {
            const response = await request(app).get('/citizens/all?skip=10&count=100')

            expect(response.status).toBe(200)
            expect(response.body).toEqual({ skip: 10, count: 100 })
        })
    })
})