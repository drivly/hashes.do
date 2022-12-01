export const api = {
  icon: '🚀',
  name: 'hashes.do',
  description: 'Cloudflare Worker Template',
  url: 'https://hashes.do/api',
  type: 'https://apis.do/crypto',
  endpoints: {
    listCategories: 'https://hashes.do/api',
    getCategory: 'https://hashes.do/:type',
  },
  site: 'https://hashes.do',
  login: 'https://hashes.do/login',
  signup: 'https://hashes.do/signup',
  subscribe: 'https://hashes.do/subscribe',
  repo: 'https://github.com/drivly/hashes.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://hashes.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
