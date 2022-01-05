import { WorkdayFactory } from './WorkdayFactory'

describe('Workday2022 Test ',() => {
  const instance = WorkdayFactory.getInstance().getWorkdayImpl(2022)

  it('test isWorkDay end of year', async () => {
    expect(instance.isWorkDay(new Date('2022/01/03'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2022/01/29'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2022/01/30'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2022/01/31'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/02/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/02/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/02/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/02/04'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2022/04/02'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2022/04/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/04/05'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2022/04/24'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2022/05/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/05/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/05/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/05/07'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2022/06/03'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2022/09/12'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2022/10/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/10/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/10/05'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/10/06'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/10/07'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2022/10/08'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2022/10/09'))).toEqual(true)
  })
})
