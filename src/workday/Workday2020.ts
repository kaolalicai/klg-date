import {AbsWorkday, IAjustConfig} from './AbsWorkday'

export class WorkDay2020 extends AbsWorkday {
  constructor () {
    super(2020)
  }

  protected getAjustConfig (): IAjustConfig[] {
    return [
      {
        'name': '元旦',
        'range': ['2020-01-01'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2020-01-19'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '春节',
        'range': ['2020-01-24', '2020-01-30'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2020-02-01'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '清明节',
        'range': ['2020-04-04', '2020-04-06'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2020-05-01', '2020-05-05'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2020-04-26'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2020-05-09'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '端午节',
        'range': ['2020-06-25', '2020-06-26'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '端午节',
        'range': ['2020-06-28'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '中秋节',
        'range': ['2020-10-01'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2020-09-27'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '国庆节',
        'range': ['2020-10-01', '2020-10-08'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2020-10-10'],
        'type': this.DAY_TYPE.WORKDAY
      }
    ]
  }
}
