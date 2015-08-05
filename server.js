var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	app = express(),
	blogs = [];
	
app.use(cors());
app.use(bodyParser.json());
app.get('/blogs', function(req, res){
	res.status(200).json(blogs);
});

app.get('/blogs/:id', function(req, res){
	var id = req.params.id - 1;
	blog = blogs[id];
	res.status(200).json(blog);
});

app.post('/blogs', function(req, res){
	var body = req.body;
	blogs.push(body);
	res.sendStatus(201);
});

app.post('/blogs/:id/comment', function(req, res){
	var blogId = req.params.id - 1;
	blog = blogs[blogId];
	comment = req.body.comment;
	blog.comments.push(comment);
	blogs[blogId] = blog;
	res.sendStatus(200);
});

var server = app.listen(9001, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Geeky Blogs API Server Started at port %s', port);
});