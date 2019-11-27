import {WorkdayFactory} from './WorkdayFactory'

describe('Workday2020 Test ', () => {
  const instance = WorkdayFactory.getInstance().getWorkdayImpl(2020)

  it('test isWorkDay end of year', async () => {
    expect(instance.isWorkDay(new Date('2020/01/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/01/02'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2020/01/19'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/02/01'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/02/03'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/01/24'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/01/30'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/02/01'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2020/04/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/04/05'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/04/06'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2020/04/26'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/04/30'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/05/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/05/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/05/03'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/05/09'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2020/06/28'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/06/25'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/06/27'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2020/09/27'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2020/09/28'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/09/29'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/09/30'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/10/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/10/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/10/07'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/10/08'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/10/10'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/10/11'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2020/10/12'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2020/10/13'))).toEqual(true)
  })
})
