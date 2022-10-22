'use strict'

var express=require('express');
var ProjectController=require('../controllers/project');
var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir:'./uploads'});

var router=express.Router();



router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.SaveProject);
router.get('/getproject/:id?',ProjectController.getProject);
router.get('/projects',ProjectController.getProjects);
router.put('/project-update/:id',ProjectController.updateProject);
router.delete('/project-delete/:id',ProjectController.deleteProject);
router.post('/upload-image/:id',multipartMiddleware,ProjectController.uploadImage);
router.get('/get-image/:image',ProjectController.getImageFile);



module.exports=router;