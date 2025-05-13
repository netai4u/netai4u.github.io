var posts=["2025/05/13/这是一篇博文/","2025/05/13/测试YouTube/","2025/05/13/我自己的测试/","2025/05/13/first-test-blog/","2025/05/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };