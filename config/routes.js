var Index=require('../app/controllers/index')
var User=require('../app/controllers/user')
var Movie=require('../app/controllers/movie')
var Comment=require('../app/controllers/comment')
var Category=require('../app/controllers/category')

module.exports=function(app){
//pre handle user
app.use(function(req,res,next){
	app.locals.user=req.session.user;
	next();
})

//index
app.get('/',Index.index)

//user
app.post('/user/signup',User.signup)
app.post('/user/signin',User.signin)
app.get('/signup',User.showSignup)
app.get('/signin',User.showSignin)
app.get('/logout',User.logout)
app.get('/admin/user/list',User.signinRequired,User.adminRequired,User.list)

//movie
app.get('/movie/:id',Movie.detail)
app.get('/admin/movie/new',Movie.new)
app.get('/admin/movie/update/:id',Movie.update)
app.post('/admin/movie',Movie.savePoster,Movie.save)
app.get('/admin/movie/list',Movie.list)
app.delete('/admin/movie/list',Movie.del)

//comment
app.post('/user/comment',Comment.save)

//category
app.get('/admin/category/new',Category.new)
app.post('/admin/category',Category.save)
app.get('/admin/category/list',Category.list)

//results
app.get('/results',Index.search)

}