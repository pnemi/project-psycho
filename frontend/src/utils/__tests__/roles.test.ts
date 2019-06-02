import * as rolesUtils from '../roles'

jest.mock('@psycho/utils/utils', () => ({
  shuffle: jest.fn((arr) => arr),
  randArrayItem: jest.fn((arr) => arr[0]),
}))

describe('roles utils', () => {
  const rolesPool = [
    {
      // excluded because it is complement role
      checked: true,
      order: 16,
      code: 'civilian',
      team: 'civilian',
      required: false,
      complement: true,
      distributedDuringGame: false,
      name: 'ROLE.CIVILIAN.NAME',
      description: 'ROLE.CIVILIAN.DESCRIPTION',
    },
    {
      // included even if somehow unchecked because it is required
      checked: false,
      order: 4,
      code: 'psycho',
      team: 'psycho',
      required: true,
      complement: false,
      distributedDuringGame: false,
      name: 'ROLE.PSYCHO.NAME',
      description: 'ROLE.PSYCHO.DESCRIPTION',
    },
    {
      // excluded because it is distributed during game
      checked: true,
      order: 6,
      code: 'informant',
      team: 'psycho',
      required: false,
      complement: false,
      distributedDuringGame: true,
      name: 'ROLE.INFORMANT.NAME',
      description: 'ROLE.INFORMANT.DESCRIPTION',
    },
    {
      // included because it is checked
      checked: true,
      order: 10,
      code: 'doctor',
      team: 'civilian',
      required: false,
      complement: false,
      distributedDuringGame: false,
      name: 'ROLE.DOCTOR.NAME',
      description: 'ROLE.DOCTOR.DESCRIPTION',
    },
  ]

  it('returns correct number of players to start a game from list of roles', () => {
    const requiredNumberOfPlayers = rolesUtils.getRequiredNumberOfPlayers(
      rolesPool
    )

    expect(requiredNumberOfPlayers).toBe(2)
  })

  it('returns correct list of selected roles', () => {
    const distributableRoles = rolesUtils.filterSelectedRoles(rolesPool)

    expect(distributableRoles).toHaveLength(2)
    expect(distributableRoles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'psycho',
        }),
        expect.objectContaining({
          code: 'doctor',
        }),
      ])
    )
  })

  it('returns correct list of complement roles', () => {
    const complementRoles = rolesUtils.filterComplementRoles(rolesPool)

    expect(complementRoles).toHaveLength(1)
    expect(complementRoles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'civilian',
        }),
      ])
    )
  })

  it('returns sorted list of roles', () => {
    const sortedRoles = rolesUtils.getSortedRolesList(rolesPool)

    expect(sortedRoles).toHaveLength(3)
    expect(sortedRoles[0].code).toBe('informant')
    expect(sortedRoles[1].code).toBe('doctor')
    expect(sortedRoles[2].code).toBe('psycho')
  })

  it('returns merged list of complement and selected roles for distribution', () => {
    const numberOfPlayers = 5
    const selectedRoles = rolesPool.slice(1)
    const complementRoles = rolesPool.slice(0, 1)

    const distributionRolesPool = rolesUtils.getRolesDistributionPool(
      numberOfPlayers,
      selectedRoles,
      complementRoles
    )

    expect(distributionRolesPool).toHaveLength(numberOfPlayers)
    expect(distributionRolesPool.slice(0, 3)).toMatchObject(selectedRoles)
    expect(distributionRolesPool[3].code).toBe('civilian')
    expect(distributionRolesPool[4].code).toBe('civilian')
  })
})
