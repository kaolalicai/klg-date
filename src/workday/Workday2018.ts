import {AbsWorkday, IAjustConfig} from './AbsWorkday'

export class WorkDay2018 extends AbsWorkday {
  constructor () {
    super(2018)
  }

  protected getAjustConfig (): IAjustConfig[] {
    return [
      {
        'name': '元旦',
        'range': ['2017-12-30', '2018-01-01'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2018-02-11'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '春节',
        'range': ['2018-02-15', '2018-02-21'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2018-02-24'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '清明节',
        'range': ['2018-04-05', '2018-04-07'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '清明节',
        'range': ['2018-04-08'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2018-04-28'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2018-04-29', '2018-05-01'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '端午节',
        'range': ['2018-06-16', '2018-06-18'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '中秋节',
        'range': ['2018-09-22', '2018-09-24'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2018-09-29','2018-09-30'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '国庆节',
        'range': ['2018-10-01', '2018-10-07'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '元旦',
        'range': ['2018-12-29'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '元旦',
        'range': ['2018-12-30', '2018-12-31'],
        'type': this.DAY_TYPE.HOLIDAY
      }
    ]
  }
}
