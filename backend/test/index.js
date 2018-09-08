import config from 'config'
import axios from 'axios'
import assert from 'assert'
import { describe, it } from 'mocha'

const URL = `${config.get('HOST')}:${config.get('PORT')}`

describe('Node server', () => {
  it('should return 200', done => {
    axios.get(URL)
      .then(response => {
        assert.strict.equal(200, response.status)
        done()
      })
      .catch(err => console.log(err))
  })
})
