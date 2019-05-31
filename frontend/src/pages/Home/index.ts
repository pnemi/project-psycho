import Home from './Home'
import { StoreState } from '@psycho/store'
import { connect } from 'react-redux'

const mapStateToProps = (state: StoreState) => ({
  isDistributing: state.game.isDistributing,
})

export default connect(mapStateToProps)(Home)
