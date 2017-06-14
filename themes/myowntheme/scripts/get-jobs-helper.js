hexo.extend.helper.register('get_jobs', function(){
	var jobs = [];
	var posts = hexo.locals.get('posts').data;
  posts.forEach(function(item) {
  	if (item.layout == 'job') {
  		jobs.push(item);  		
  	}
  });
  jobs.sort(function(a, b) {
    return a.order - b.order;
  });
  return jobs;
});