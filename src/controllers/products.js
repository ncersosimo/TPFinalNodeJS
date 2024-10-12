import Product from "../models/mongoDB/Product.js"
export const productController = {
    async getAll(req, res) {
        try {
            const products = await Product.find()
            products.length ?
                res.status(200).json({ success: true, message: "Products Collection", data: products })
                :
                res.status(404).json({ success: false, message: "Products Database is empty" })

        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    },
    // get a resource by Id 
    async getById(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                return res.status(400).json({ success: false, message: "Missing 'id' param" })
            }
    
            const product = await Product.findById(id)
            if (!product) {
                return res.status(404).json({ success: false, message: `No product found with id '${id}'` })
            }
    
            res.status(200).json({success: true, message: "Product found", data: product})
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    },
    // get resources which mark contains the query string
    async getByMark(req, res) {
        try {
            const { mark } = req.query
            if (!mark) {
                return res.status(400).json({ success: false, message: "Missing 'mark' query param" })
            }
            const products = await Product.find({ mark: { $regex: mark, $options: "i" } })
            if (!products.length) {
                res.status(404).json({ success: false, message: `No products with '${mark}' in the mark.` })
            }
            res.status(200).json({
                success: true,
                message: "Products by query mark",
                data: products
            })
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    },
    //  Create a resource
    async createOne(req, res) {
        try {
            const { mark, name, description, sku, price } = req.body
            if (!mark) {
                return res.status(400).json({ success: false, message: "Missing 'mark' param" })
            }
            if (!name) {
                return res.status(400).json({ success: false, message: "Missing 'name' param" })
            }
            if (!description) {
                return res.status(400).json({ success: false, message: "Missing 'description' param" })
            }
            if (!sku) {
                return res.status(400).json({ success: false, message: "Missing 'sku' param" })
            }
            if (!price) {
                return res.status(400).json({ success: false, message: "Missing 'price' param" })
            }
            const newProduct = await new Product({
                mark, name, description, sku, price
            })
            const savedProduct = await newProduct.save()
            res.status(200).json({ success: true, message: "New product Created", data: savedProduct })
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error", detail: error.message })
        }
    },
    //  Update a resource
    async updateOne(req, res) {
        try {
            const { mark, name, description, sku, price } = req.body
            if (!mark) {
                return res.status(400).json({ success: false, message: "Missing 'mark' param" })
            }
            if (!name) {
                return res.status(400).json({ success: false, message: "Missing 'name' param" })
            }
            if (!description) {
                return res.status(400).json({ success: false, message: "Missing 'description' param" })
            }
            if (!sku) {
                return res.status(400).json({ success: false, message: "Missing 'sku' param" })
            }
            if (!price) {
                return res.status(400).json({ success: false, message: "Missing 'price' param" })
            }
            const updatedproduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!updatedproduct) {
                return res.status(404).json({ success: false, message: "Update failed: Product Not found" });
            }
            res.status(200).json({ success: true, message: "Product Updated", data: updatedproduct });
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error", detail: error.message });
        }
    },
    //  Delete a resource
    async deleteOne(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id)
            if (!product) {
                return res.status(404).json({ success: false, message: "Deletion failed: Product Not found" })
            }
            // res.send(204) En desuso o futuro desuso
            res.sendStatus(204)
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    },        
}