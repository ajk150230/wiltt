import {render} from '@testing-library/react';
import { interpolate } from 'gsap';
import axios from 'axios'
import Login from '../Components/Form/Login';
const supertest = require('supertest')
const { getOrder, getAllShoes, login } = require('../TestFunctions')
// const { getOrder } = require('../../server/Controller/shoesController')

test("test order get request", async ()=>{
    expect.assertions(0);
    const jesus = await getOrder(5);
    expect(jesus).toBeDefined()
})
test("test order get request", async ()=>{
    const data = await getOrder(5);
    console.log(data)
    expect(data.address).toEqual('Jesus')
})
test("test order get request", async ()=>{
    const notnull = await getOrder(null);
    console.log(notnull)
    expect(recieved).toBe(true)
})
test("test shoes api", async ()=>{
    const shoes = await getAllShoes();
    console.log(shoes)
    expect(shoes.status).toBe(200)
})
test("test shoes if its an array with items", async ()=>{
    expect.assertions(0);
    const array = await getAllShoes();
    console.log(array)
    expect(array).toBeTruthy()
})
test("user can login", async ()=>{
    const user = await login();
    expect(user).toHaveReturned()
})
test("user can login", async ()=>{
    const user = await login();
    expect([]).toBeFalsy()
    expect([1,2,4]).toHaveLength(3)
    expect(user).toHaveProperty('email')
    expect(user).toHaveLength(1)
})

