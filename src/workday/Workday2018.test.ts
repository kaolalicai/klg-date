import {WorkdayFactory} from './WorkdayFactory'

describe('Workday2018 Test ', () => {
  const instance = WorkdayFactory.getInstance().getWorkdayImpl(2018)

  it('test isWorkDay end of year', async () => {
    expect(instance.isWorkDay(new Date('2018/12/24'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2018/12/28'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2018/12/29'))).toEqual(true)
    expect(instance.isWorkDay(new Date('2018/12/30'))).toEqual(false)
  })
})
