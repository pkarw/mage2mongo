module.exports = {

  magento: {
    url: process.env.MAGENTO_URL || 'http://magento2.demo-1.divante.pl/rest/',
    consumerKey: process.env.MAGENTO_CONSUMER_KEY || 'alva6h6hku9qxrpfe02c2jalopx7od1q',
    consumerSecret: process.env.MAGENTO_CONSUMER_SECRET || '9tgfpgoojlx9tfy21b8kw7ssfu2aynpm',
    accessToken: process.env.MAGENTO_ACCESS_TOKEN || 'rw5w0si9imbu45h3m9hkyrfr4gjina8q',
    accessTokenSecret: process.env.MAGENTO_ACCESS_TOKEN_SECRET || '00y9dl4vpxgcef3gn5mntbxtylowjcc9',
  },

  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/rcom'
  },

  passport: {
    jwtSecret: "MyS3cr3tK3Y",
    jwtSession: {
        session: false
      }
  }

}
