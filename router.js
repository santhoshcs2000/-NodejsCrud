const express = require('express')
const router = express.Router()
const Alien = require('./model/alienschema')
router.get('/',async(req,res)=>{
   try{
    const alien = await Alien.find()
    res.json(alien)
    }
    catch{
        res.json("error")
    }
   
})
router.get('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }
    catch(err){
        res.json("errror")

    }
})
router.post('/',async(req,res)=>{
        const a = new Alien({
        name :req.body.name,
            email:req.body.email,
            sub:req.body.sub
        })
        try{
            const alien = await a.save()
             res.json(alien)
        }
        catch(err){
            res.json("error")

        } 

})
router.patch("/:id",async(req,res)=>{
    try {

        const a = await Alien.findById(req.params.id)
        a.sub = req.body.sub
        const b = await a.save()
        res.json(b)

        
    } catch (error) {

        res.json("error")
        
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        const a1 = await alien.remove()
        res.json("deteleted id" + a1)
    }
    catch(err){
        res.json("error is accure in delete")

    }

})
 module.exports = router