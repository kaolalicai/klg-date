import { WorkdayFactory } from './WorkdayFactory'

describe('Workday2024 Test ',() => {
  const instance = WorkdayFactory.getInstance().getWorkdayImpl(2024)

  it('test isWorkDay end of year', async () => {
    expect(instance.isWorkDay(new Date('2024/01/01'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2024/02/04'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2024/02/10'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/02/11'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/02/12'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/02/13'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/02/14'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/02/15'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/02/16'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/02/17'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/02/18'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2024/04/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/04/05'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2024/04/07'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2024/04/28'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2024/05/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/05/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/05/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/05/11'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2024/06/10'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2024/09/14'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2024/09/15'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/09/16'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/09/17'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2024/09/29'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2024/10/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/10/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/10/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/10/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/10/05'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/10/06'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/10/07'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2024/10/12'))).toEqual(true)
  })
})
