import { Team } from '../db'

export const getTeams = async () => Team.find()

export const getTeamById = async (id) => Team.findById(id)
