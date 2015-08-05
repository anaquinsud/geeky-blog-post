# geeky-blog-post
Sample Blog Backend-API with Node.js for MEAN Stack Workshop

### Setup:
npm install

### Start server:
node server.js

### Access api:
#### -- GET all blog --
curl -X GET http://localhost:9001/blogs

#### -- GET blog by id --
curl -X GET http://localhost:9001/blogs/1

#### -- POST blog --


curl -X POST http://localhost:9001/blogs -H 'Content-Type: application/json' -d '{"title":"", "content":"", "post_by":"", "comments":[]}'

#### -- POST comment --


curl -X POST http://localhost:9001/blogs/:blogId/comment -H 'Content-Type: application/json' -d '{"message":"", "comment_by":""}'
