import { WorkdayFactory } from './WorkdayFactory'

describe('Workday2021 Test ',() => {
  const instance = WorkdayFactory.getInstance().getWorkdayImpl(2021)

  it('test isWorkDay end of year', async () => {
    expect(instance.isWorkDay(new Date('2021/01/01'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2021/02/07'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2021/02/20'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2021/02/11'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/02/12'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/02/15'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/02/16'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/02/17'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2021/04/05'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2021/04/25'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2021/05/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/05/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/05/05'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/05/08'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2021/06/14'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2021/09/18'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2021/09/20'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/09/21'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2021/09/26'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2021/10/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/10/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/10/05'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/10/06'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/10/07'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/10/07'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2021/10/09'))).toEqual(true)
  })
})
