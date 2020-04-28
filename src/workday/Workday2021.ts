import {AbsWorkday, IAjustConfig} from './AbsWorkday'

export class WorkDay2021 extends AbsWorkday {
  constructor () {
    super(2021)
  }

  protected getAjustConfig (): IAjustConfig[] {
    return [
      {
        'name': '元旦',
        'range': ['2021-01-01', '2021-01-03'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2021-02-07'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '春节',
        'range': ['2021-02-11', '2021-02-17'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2021-02-20'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '清明节',
        'range': ['2021-04-03','2021-04-05'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2021-04-25'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2021-05-01','2021-05-05'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2021-05-08'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '端午节',
        'range': ['2021-06-12', '2021-06-14'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '中秋节',
        'range': ['2021-09-18'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '中秋节',
        'range': ['2021-09-19','2021-09-21'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2021-09-26'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '国庆节',
        'range': ['2021-10-01','2021-10-07'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2021-10-09'],
        'type': this.DAY_TYPE.WORKDAY
      }
    ]
  }
}
