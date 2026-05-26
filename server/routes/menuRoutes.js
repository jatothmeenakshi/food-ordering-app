const express=require('express');
const router=express.Router();
const MenuItem=require('../models/MenuItem');

router.get('/',async(req,res)=>{
    try{
        const items=await MenuItem.find();
        res.json(items);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
router.post('/',async(req,res)=>{
    try{
        const item=new MenuItem(req.body);
        const saved=await item.save();
        res.status(201).json(saved);
    }catch (err){
        res.status(400).json({message:err.message});

    }
});
module.exports=router;