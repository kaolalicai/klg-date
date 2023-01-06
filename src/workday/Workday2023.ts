import {AbsWorkday, IAjustConfig} from './AbsWorkday'

export class WorkDay2023 extends AbsWorkday {
  constructor () {
    super(2023)
  }

  protected getAjustConfig (): IAjustConfig[] {
    return [
      {
        'name': '元旦',
        'range': ['2023-01-02'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2023-01-23','2023-01-27'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2023-01-28', '2023-01-29'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '清明节',
        'range': ['2023-04-05'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2023-04-23'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2023-05-01','2023-05-03'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2023-05-06'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '端午节',
        'range': ['2023-06-22','2023-06-23'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '端午节',
        'range': ['2023-06-25'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '中秋节',
        'range': ['2023-09-29'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2023-10-02','2023-10-06'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2023-10-07','2023-10-08'],
        'type': this.DAY_TYPE.WORKDAY
      }
    ]
  }
}
