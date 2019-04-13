import { Team } from '../db'

export const getTeamById = async (id) => Team.findById(id)
