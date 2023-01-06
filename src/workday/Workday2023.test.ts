import { WorkdayFactory } from './WorkdayFactory'

describe('Workday2023 Test ',() => {
  const instance = WorkdayFactory.getInstance().getWorkdayImpl(2023)

  it('test isWorkDay end of year', async () => {
    expect(instance.isWorkDay(new Date('2023/01/02'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2023/01/23'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/01/24'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/01/25'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/01/26'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/01/27'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/01/28'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2023/01/29'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2023/04/05'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2023/04/23'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2023/05/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/05/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/05/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/05/06'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2023/06/22'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/06/23'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/06/25'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2023/09/29'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2023/10/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/10/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/10/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/10/05'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/10/06'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2023/10/07'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2023/10/08'))).toEqual(true)
  })
})
