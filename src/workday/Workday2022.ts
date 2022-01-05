import {AbsWorkday, IAjustConfig} from './AbsWorkday'

export class WorkDay2022 extends AbsWorkday {
  constructor () {
    super(2022)
  }

  protected getAjustConfig (): IAjustConfig[] {
    return [
      {
        'name': '元旦',
        'range': ['2022-01-03'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '春节',
        'range': ['2022-01-29','2022-01-30'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '春节',
        'range': ['2022-01-31', '2022-02-04'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '清明节',
        'range': ['2022-04-02'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '清明节',
        'range': ['2022-04-04','2022-04-05'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2022-04-24'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '劳动节',
        'range': ['2022-05-02','2022-05-04'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '劳动节',
        'range': ['2022-05-07'],
        'type': this.DAY_TYPE.WORKDAY
      },
      {
        'name': '端午节',
        'range': ['2022-06-03'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '中秋节',
        'range': ['2022-09-12'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2022-10-03','2022-10-07'],
        'type': this.DAY_TYPE.HOLIDAY
      },
      {
        'name': '国庆节',
        'range': ['2022-10-08','2022-10-09'],
        'type': this.DAY_TYPE.WORKDAY
      }
    ]
  }
}
