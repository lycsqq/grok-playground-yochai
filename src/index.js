import { handleGrokRequest } from "./handle_grok.js";

export default {

  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    console.log('Request URL:', req.url);

    // 处理主页面
    const filePath = url.pathname;
    console.log('filePath:', filePath);
    // if (filePath === '/' || filePath === '/index.html') {
      if (filePath === '/index.html') {
        console.log('Serving index.html',env);
        return new Response(await env.__STATIC_CONTENT.get('index.html'), {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      });
    }
    //处理grok请求
    return handleGrokRequest(req);
  }
};