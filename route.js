/**
 * Created by Zeki on 18.06.2017.
 */
var express = require('express');
var router = express.Router();
var News = require('./modules/news');
var ObjectID = require('mongodb').ObjectID;


// Bütün haberleri getir.
router.get('/news',function (req, res, next) {
    News.find(function (err, result) {
        res.json({success:true, news: result});
    });
});

// İstenen haberleri getirir.
router.get('/news/:query',function (req, res, next) {
    News.find({title: {$regex: ".*"+req.params.query+".*"}},function (err, result) {
        if(err) res.json({success:false, msg:'Something went wrong'});
        else res.json({success:true, news: result});
    });
});

// Yeni Haber Ekle.
router.post('/news', function (req, res, next) {

    var insertNews = new News({
        title: req.body.title,
        description: req.body.desc,
        url: req.body.url,
        img: req.body.img
    });

    insertNews.save(function (err, news) {
        if(err) res.json({success:false, msg:'Failed to insert news'});
        else res.json({success:true, msg:'Success to insert news'});
    });
});

// Haber Sil.
router.delete('/news/:id', function (req, res, next) {
    News.remove({_id:req.params.id},function (err, result) {
       if(err) res.json({success:false, msg:'Failed to delete news'});
       else res.json({success:true, msg:'Success to delete news'});
    });
});

router.post('/updateContact', function (req, res, next) {

    News.update({_id: ObjectID(req.body.id)},{$set:{title:req.body.title,description:req.body.desc,url:req.body.url,img: req.body.img}},function (err, news) {
        if(err){
            res.json({success:'false',msg:'Failed to update news'});
        }else{
            res.json({success:'true',msg:'Success to update news'});
        }
    })
});


module.exports = router;