import * as moment from 'moment-timezone'

moment.tz.setDefault('Asia/Shanghai')

// 调休配置
export interface IAjustConfig {
  name: string
  range: string[]
  type: string
}

export abstract class AbsWorkday {
  year: number
  protected ONE_DAY_TIMESTAMP = 86400000
  protected DAY_TYPE = {
    HOLIDAY: 'holiday',
    WORKDAY: 'workday'
  }
  // 是否为工作日的缓存
  private isWorkdayMap: Map<number, Boolean> = new Map()

  constructor (year) {
    this.year = year
    // 调休假日
    const ajustHolidays: Set<number> = new Set([])
    // 调休工作日
    const ajustWorkdays: Set<number> = new Set([])
    // 根据调休配置解析出调休假日和调休工作日
    const ajustConfig = this.getAjustConfig()
    for (const config of ajustConfig) {
      if (!config || !Object.values(this.DAY_TYPE).includes(config.type) || !config.range || config.range.length <= 0) {
        throw new Error('Ajust config error, please check!')
      }
      const startTime = moment(config.range[0]).valueOf()
      const endTime = moment(config.range[config.range.length - 1]).valueOf()
      for (let time = startTime; time <= endTime; time += this.ONE_DAY_TIMESTAMP) {
        if (config.type === this.DAY_TYPE.HOLIDAY) {
          ajustHolidays.add(time)
        } else if (config.type === this.DAY_TYPE.WORKDAY) {
          ajustWorkdays.add(time)
        }
      }
    }
    // 全年的时间，提前记录是否为工作日，缓存
    const startTime = moment(year + '-01-01').startOf('year').valueOf()
    const endTime = moment(startTime).endOf('year').valueOf()
    for (let time = startTime; time <= endTime; time += this.ONE_DAY_TIMESTAMP) {
      if (ajustWorkdays.has(time)) {
        this.isWorkdayMap[time] = true
      } else if (this.isWeekend(new Date(time))) {
        this.isWorkdayMap[time] = false
      } else if (ajustHolidays.has(time)) {
        this.isWorkdayMap[time] = false
      } else {
        this.isWorkdayMap[time] = true
      }
    }
  }

  /**
   * 是否为工作日
   * @param date 时间
   */
  isWorkDay (date: Date): Boolean {
    const time = moment(date || new Date()).startOf('day').valueOf()
    return this.isWorkdayMap[time]
  }

  /**
   * 获取调休配置
   */
  protected abstract getAjustConfig (): IAjustConfig[]

  /**
   * 是否为周末
   * @param date 时间
   */
  private isWeekend (date: Date) {
    return (date.getDay() === 6) || (date.getDay() === 0)
  }
}
