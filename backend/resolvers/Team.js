import { Team, Language } from '../db'

const getTeamMatchPipeline = (code) => ([
  {
    $match: {
      code
    }
  }
])

const getTeamsPipeline = (lang) => ([
  {
    $project: {
      translation: {
        $filter: {
          input: '$translations',
          as: 'translation',
          cond: { $eq: ['$$translation.locale', lang._id] }
        }
      },
      code: 1
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
  }
])

const teamResolver = async (parent, { code, lang }) => (
  Team.aggregate([
    ...getTeamMatchPipeline(code),
    ...getTeamsPipeline(await Language.findOne({ code: lang.code }))
  ])[0]
)

const teamsResolver = async (parent, { lang }) => (
  Team.aggregate([
    ...getTeamsPipeline(await Language.findOne({ code: lang.code }))
  ])
)

export {
  teamResolver,
  teamsResolver
}
