import {WorkDay2018} from './Workday2018'
import {WorkDay2019} from './Workday2019'
import {WorkDay2020} from './Workday2020'
import {AbsWorkday} from './AbsWorkDay'

export class WorkdayFactory {
  private static instance: WorkdayFactory
  private map: Map<number, AbsWorkday> = new Map()

  private constructor () {
    const impls = [
      new WorkDay2018(),
      new WorkDay2019(),
      new WorkDay2020()
    ]
    for (const impl of impls) {
      this.map.set(impl.year, impl)
    }
  }

  static getInstance () {
    return this.instance || (this.instance = new WorkdayFactory())
  }

  /**
   * 根据年份获取某年的工作日实现
   * @param year 年份
   */
  getWorkdayImpl (year: number): AbsWorkday {
    if (this.map.get(year)) {
      return this.map.get(year) as AbsWorkday
    } else {
      throw new Error('No such workday implements!')
    }
  }
}
