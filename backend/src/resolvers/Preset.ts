import { Preset } from '../db'

const presetsResolver = async () =>
  Preset.aggregate([
    {
      $lookup: {
        from: 'roles',
        localField: 'roles',
        foreignField: '_id',
        as: 'rolesPopulated',
      },
    },
    {
      $project: {
        name: 1,
        roles: {
          $map: {
            input: '$rolesPopulated',
            as: 'role',
            in: '$$role.code',
          },
        },
      },
    },
  ])

export { presetsResolver }
