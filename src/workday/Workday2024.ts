import {AbsWorkday, IAjustConfig} from './AbsWorkday'

export class WorkDay2024 extends AbsWorkday {
  constructor () {
    super(2024)
  }


  protected getAjustConfig (): IAjustConfig[] {
    return [
      {
        'name': '元旦',
        'range': ['2024-01-01'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2024-02-04'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '春节',
        'range': ['2024-02-10','2024-02-17'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2024-02-18'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '清明节',
        'range': ['2024-04-04','2024-04-05'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '清明节',
        'range': ['2024-04-07'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2024-04-28'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2024-05-01','2024-05-03'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2024-05-11'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '端午节',
        'range': ['2024-06-10'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '中秋节',
        'range': ['2024-09-14'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '中秋节',
        'range': ['2024-09-16','2024-09-17'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2024-09-29'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '国庆节',
        'range': ['2024-10-01','2024-10-05'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2024-10-12'],
        'type': this.DAY_TYPE.WORKDAY
      }
    ]
  }
}
