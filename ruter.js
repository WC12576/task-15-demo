app.get('/moreNew',function(req,res){
	var length = req.query.length;
	var index = req.query.index;
	var loadMore = index*length;
	var arr = [loadMore,loadMore+1,loadMore+2];
	res.send({
		status: 0,
		arr
	})
});