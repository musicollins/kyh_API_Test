const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send("products")
})
router.get("/:id", (req, res)=>{
    res.status(200).json({id: req.params.id})
})


module.exports = router;
