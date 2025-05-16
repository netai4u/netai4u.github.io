var posts=["2025/05/13/开通博客的初衷/","2025/05/13/Web前端就业前景分析/","2025/05/13/今年前端开发行业的就业行情如何呢？/","2025/05/13/面试必问，刷完就能通过/","2025/05/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };