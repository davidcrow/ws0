// index.js
export default {
  async fetch(request, env, ctx) {
    return new Response("Static content should be served. This is a fallback.", {
      status: 200,
    });
  },
};