import express from 'express'
import productRoute from './ProductRoute/ProductRoute.js'
const route=express()
route.use('/',productRoute)
export default route