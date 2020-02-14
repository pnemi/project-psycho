import { Role } from '../db'

export const getRoles = async () => Role.find()
