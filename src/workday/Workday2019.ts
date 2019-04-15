import {AbsWorkday, IAjustConfig} from './AbsWorkday'

export class WorkDay2019 extends AbsWorkday {
  constructor () {
    super(2019)
  }

  protected getAjustConfig (): IAjustConfig[] {
    return [
      {
        'name': '元旦',
        'range': ['2019-01-01'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2019-02-02', '2019-02-03'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '春节',
        'range': ['2019-02-04', '2019-02-10'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '清明节',
        'range': ['2019-04-05'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2019-05-01', '2019-05-03'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2019-04-28'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2019-05-05'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '端午节',
        'range': ['2019-06-07'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '中秋节',
        'range': ['2019-09-13'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2019-09-29'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '国庆节',
        'range': ['2019-10-01', '2019-10-07'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2019-10-12'],
        'type': this.DAY_TYPE.WORKDAY
      }
    ]
  }
}
