import product from '../Model/ProductModel/ProductModel.js';
import cloudinary from 'cloudinary';



const productCreate = async (req, res) => {
    try {

        cloudinary.config({
            cloud_name: "dfjc0pkpp",
            api_key: "588969669952431",
            api_secret: "SaArGafJGobXIJzjmYNoAKwaEY8"
        })
        let imgArr = []
        console.log(req);

        for (let e of req.files.file) {
            let cld = await cloudinary.v2.uploader.upload(e.path)
            imgArr.push(cld.url);
        }
        console.log(imgArr);
        const productMod = new product({
            productName: req.body.productName ?? '',
            brandName: req.body.brandName ?? '',
            price: req.body.price ?? '',
            quantity: req.body.quantity ?? '',
            rating: req.body.rating ?? 0,
            imageUrl: imgArr ?? []
        });
        // console.log(productMod);
        await productMod.save();
        res.status(200).send({ message: 'successfull' })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
}

const getData = async (req, res) => {
    try {
        let dbRes = await product.find();
        if (dbRes) {
            res.status(200).send({ message: 'fetched successfully', annaiData: dbRes });
        } else {
            res.status(400).send({ message: 'no data found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
export default { productCreate, getData }