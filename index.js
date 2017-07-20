const { cozyClient } = require('cozy-konnector-libs')


cozyClient.data.defineIndex('io.cozy.bills', ['_id'])
.then(index => cozyClient.data.query(index, {selector: {
  _id: {
    '$gt': null
  }
}}))
.then(bills => {
    console.log(bills, 'bills')
})
