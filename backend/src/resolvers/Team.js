import * as TeamService from '../services/TeamService'

const teamsResolver = () => TeamService.getTeams()

export { teamsResolver }
