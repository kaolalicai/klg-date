/**
 *
 * Created by nick on 2017/3/22.
 */
import {MomentInput} from 'moment'
import * as moment from 'moment-timezone'
import {DurationInputArg1, unitOfTime} from 'moment-timezone'
import {WorkdayFactory} from './workday'

moment.tz.setDefault('Asia/Shanghai')

export class DateUtil {

  /**
   * 拿到凌晨时间
   * @param date
   * @param days 天数加减
   * @returns {Date}
   */
  static getDayStart (date: MomentInput = new Date(), days = 0) {
    return moment(date || new Date()).startOf('day').add(days, 'day').toDate()
  }

  /**
   * 计算两个时间的差值
   * @param from
   * @param to 默认是当前日期
   * @param type 类型 默认是天
   * @returns {Number}
   */
  static diff (from: MomentInput, to?: MomentInput, type?: unitOfTime.Diff) {
    if (!from) return 0
    if (!type) type = 'day'
    if (type === 'day') {
      from = moment(from).startOf('day').toDate()
      to = moment(to).startOf('day').toDate()
    }
    return moment(to).diff(from, type)
  }

  static addDay (date: MomentInput, days = 0) {
    return moment(date || new Date()).add(days, 'day').toDate()
  }

  static addMonth (date: MomentInput, months = 0) {
    return this.add(date, months, 'month')
  }

  static add (date: MomentInput, amount: DurationInputArg1 = 0, unit: unitOfTime.DurationConstructor = 'day') {
    return moment(date || new Date()).add(amount, unit).toDate()
  }

  static format (date: MomentInput, format = 'YYYY-MM-DD') {
    return moment(date || new Date()).format(format)
  }

  static compare (date1: MomentInput, date2: MomentInput = new Date()) {
    return moment(date1).diff(date2, 'seconds')
  }

  /**
   * 是否是工作日
   * @param currentTime 时间
   */
  static isWorkDay (currentTime: Date): Boolean {
    let now = currentTime || new Date()
    return WorkdayFactory.getInstance().getWorkdayImpl(now.getFullYear()).isWorkDay(now)
  }

  /**
   * 返回下一个工作日
   * @param currentTime 时间
   */
  static getNextWorkDay (currentTime: Date): Date {
    let now = currentTime || new Date()
    let next = this.addDay(now, 1)
    while (!this.isWorkDay(next)) {
      next = this.addDay(next, 1)
    }
    return next
  }
}
