import Home from './Home'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  isDistributing: state.game.isDistributing,
})

export default connect(mapStateToProps)(Home)
