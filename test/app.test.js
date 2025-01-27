const request =require('supertest')

const { app }=require('../app')


describe('GET',()=>{
    describe('the empty request',()=>{
        it('shoulde return the 200 status code from the server',async()=>{
            const response=await request(app).get('/')

            expect(response.status).toBe(200)
            expect(response.text).toEqual('server')
        })
    })
})