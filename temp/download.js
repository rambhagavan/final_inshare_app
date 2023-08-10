const router=require('express').Router();
const File=require("../modules/file");


router.get('/:uuid',async(req,res)=>{
    const file=await File.findOne({uuid:req.params.uuid});
    if(!file){
        res.render('download',{error:'link has been expired'});
    }
    const filePath=`${__dirname}/../${file.path}`;
    console.log(filePath)
    res.download(filePath);
})
module.exports=router;
