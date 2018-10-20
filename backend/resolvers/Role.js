import { Language, Role } from '../db'

const getRoleMatchPipeline = (code) => ([
  {
    $match: {
      code
    }
  }
])

const getRolesPipeline = (lang) => ([
  {
    $lookup: {
      from: 'teams',
      localField: 'team',
      foreignField: '_id',
      as: 'team'
    }
  },
  {
    $unwind: '$team'
  },
  {
    $project: {
      translation: {
        $filter: {
          input: '$translations',
          as: 'translation',
          cond: { $eq: ['$$translation.locale', lang._id] }
        }
      },
      order: 1,
      code: 1,
      required: 1,
      listed: 1,
      complement: 1,
      assignedDuringGame: 1,
      'team.code': 1,
      'team.translation': {
        $filter: {
          input: '$team.translations',
          as: 'translation',
          cond: { $eq: ['$$translation.locale', lang._id] }
        }
      }
    }
  },
  {
    $unwind: '$translation'
  },
  {
    $addFields: {
      'name': '$translation.name',
      'description': '$translation.description'
    }
  },
  {
    $project: {
      'translation': 0
    }
  },
  {
    $unwind: '$team.translation'
  },
  {
    $addFields: {
      'team.name': '$team.translation.name',
      'team.description': '$team.translation.description'
    }
  },
  {
    $project: {
      'team.translation': 0
    }
  }
])

const roleResolver = async (parent, { code, lang }) => (
  (await Role.aggregate([
    ...getRoleMatchPipeline(code),
    ...getRolesPipeline(await Language.findOne({ code: lang.code }))
  ]))[0]
)

const rolesResolver = async (parent, { lang }) => (
  Role.aggregate([
    ...getRolesPipeline(await Language.findOne({ code: lang.code }))
  ])
)

export {
  roleResolver,
  rolesResolver
}
