import {DateUtil} from './index'

describe(' DateUtil Test ', () => {
  it(' get0Time ', async () => {
    expect(DateUtil.getDayStart() instanceof Date)
    expect(DateUtil.getDayStart(new Date('2017/1/1 12:30'))).toEqual(new Date('2017/1/1'))
    expect(DateUtil.getDayStart(new Date('2017/1/1 22:30'))).toEqual(new Date('2017/1/1'))
  })

  it(' addDay ', async () => {
    expect(DateUtil.getDayStart(DateUtil.addDay(null))).toEqual(DateUtil.getDayStart())
    expect(DateUtil.addDay(new Date('2017/1/1'), 3)).toEqual(new Date('2017/1/4'))
    expect(DateUtil.addDay(new Date('2017/1/1'), -1)).toEqual(new Date('2016/12/31'))
    expect(DateUtil.addDay(new Date('2017/1/5 12:30'), -3)).toEqual(new Date('2017/1/2 12:30'))
  })

  it(' addMonth ', async () => {
    expect(DateUtil.addMonth(new Date('2017/1/1'), 2)).toEqual(new Date('2017/3/1'))
    expect(DateUtil.addMonth(new Date('2017/1/1'), -1)).toEqual(new Date('2016/12/1'))
  })

  it(' diff ', async () => {
    expect(DateUtil.diff(new Date('2017/7/20'), new Date('2017/8/10'))).toEqual(21)
    expect(DateUtil.diff(new Date('2017/8/10'), new Date('2017/7/20'))).toEqual(-21)
    expect(DateUtil.diff(new Date('2017/1/4'), new Date('2017/1/7'))).toEqual(3)
    expect(DateUtil.diff(new Date('2017/1/4 12:00'), new Date('2017/1/7'))).toEqual(3)
    expect(
      DateUtil.diff(DateUtil.addDay(null, -3))
    ).toEqual(3)
    expect(
      DateUtil.diff(DateUtil.getDayStart(), DateUtil.addDay(DateUtil.getDayStart(), 30))
    ).toEqual(30)
  })

  it(' format ', async () => {
    expect(DateUtil.format(new Date('2017/1/1'))).toEqual('2017-01-01')
  })

  it(' compare ', async () => {
    expect(DateUtil.compare(new Date('2017/1/1'), new Date('2017/1/1'))).toEqual(0)
    expect(DateUtil.compare(new Date('2017/1/2'), new Date('2017/1/1'))).toEqual(86400)
  })

  it('test isWorking day', async () => {
    expect(DateUtil.isWorkDay(new Date('2018/12/24'))).toEqual(true)
    expect(DateUtil.isWorkDay(new Date('2018/12/28'))).toEqual(true)
    expect(DateUtil.isWorkDay(new Date('2018/12/29'))).toEqual(true)
    expect(DateUtil.isWorkDay(new Date('2018/12/30'))).toEqual(false)
    expect(DateUtil.isWorkDay(new Date('2019/01/01'))).toEqual(false)
    expect(DateUtil.isWorkDay(new Date('2019/01/02'))).toEqual(true)
    expect(DateUtil.isWorkDay(new Date('2019/04/28'))).toEqual(true)
    expect(DateUtil.isWorkDay(new Date('2019/05/02'))).toEqual(false)
    expect(DateUtil.isWorkDay(new Date('2019/05/05'))).toEqual(true)
  })

  it('test getNextWorkDay', async () => {
    expect(DateUtil.getNextWorkDay(new Date('2018/12/24'))).toEqual(new Date('2018/12/25'))
    expect(DateUtil.getNextWorkDay(new Date('2018/12/28'))).toEqual(new Date('2018/12/29'))
    expect(DateUtil.getNextWorkDay(new Date('2018/12/29'))).toEqual(new Date('2019/01/02'))
    expect(DateUtil.getNextWorkDay(new Date('2018/12/30'))).toEqual(new Date('2019/01/02'))
    expect(DateUtil.getNextWorkDay(new Date('2019/01/01'))).toEqual(new Date('2019/01/02'))
    expect(DateUtil.getNextWorkDay(new Date('2019/01/02'))).toEqual(new Date('2019/01/03'))
  })
})
