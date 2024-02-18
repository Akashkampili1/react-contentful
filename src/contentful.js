const client = require('contentful').createClient({
  space: 'n2g35udzh8t2',
  accessToken: '-aqPy5ucn5XxZ8HZEaMniVhDinNC9tIhpsa5uVbmqQ0'
})

const getBlogPosts = () => client.getEntries().then(response => response.items)

const getSinglePost = slug =>
  client
    .getEntries({
      'fields.urlSlug': slug,
      content_type: 'cavaloBlog'
    })
    .then(response => response.items)

export { getBlogPosts, getSinglePost }
