import {WorkdayFactory} from './WorkdayFactory'

describe('Workday2018 Test ', () => {
  const instance = WorkdayFactory.getInstance().getWorkdayImpl(2019)

  it('test isWorkDay end of year', async () => {
    expect(instance.isWorkDay(new Date('2019/01/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/01/02'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2019/02/01'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/02/02'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/02/03'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/02/04'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/02/10'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/02/11'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2019/04/04'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/04/05'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/04/06'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2019/04/30'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/05/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/05/02'))).toEqual(true)

    expect(instance.isWorkDay(new Date('2019/06/06'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/06/07'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/06/08'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2019/09/12'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/09/13'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/09/14'))).toEqual(false)

    expect(instance.isWorkDay(new Date('2019/09/28'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/09/29'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/09/30'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/10/01'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/10/02'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/10/07'))).toEqual(false)
    expect(instance.isWorkDay(new Date('2019/10/08'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/10/11'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/10/12'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2019/10/13'))).toEqual(false)
  })
})
