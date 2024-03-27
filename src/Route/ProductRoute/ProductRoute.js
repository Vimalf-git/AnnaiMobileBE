import multer from 'multer'
import express from 'express'
import productController from '../../Controller/productController.js';
const route = express()
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
});

const upload = multer({ storage });
const uploadMul = upload.fields([{ name: 'file', maxCount: 3 }])
route.post('/productadd', uploadMul, productController.productCreate)
route.get('/getdata', productController.getData);
export default route