import { connect } from "react-redux";
import Play from "./play";
import { fetchGame, exitGame } from '../../../actions/game_actions'
import { fetchMonsters } from '../../../actions/monster_actions';
import { fetchUserTeam } from '../../actions/team_actions';



const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    user: state.session.user,
    monsters: Object.values(state.monsters),
    team: Object.values(state.team)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchMonsters: () => dispatch(fetchMonsters()),
  fetchTeam: (userId) => dispatch(fetchUserTeam(userId)),
  createNewGame: (game) => dispatch(createGame(game)),
  exitGame: (gameId) => dispatch(exitGame(gameId)),
  fetchGame: (gameId) => dispatch(fetchGame(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
