export enum TrendCategory {
  unknown = 0,
  manicure = 1,
}

export class UpdTrend {
  wid?: string
  lid?: string
}

export class TTrendItem {
  public _id?: string
  public instagramId?: string
  public category?: TrendCategory
  public lang?: string
  public votes?: number
  public views?: number
}

export class TrendItem extends TTrendItem {
  constructor(t: TTrendItem) {
    super()
    this._id = t._id
    this.instagramId = t.instagramId
    this.category = t.category || TrendCategory.unknown
    this.lang = t.lang
    this.votes = t.votes || 0
    this.views = t.views || 0
  }

  public getPercent() {
    const votes = this.votes || 1
    const views = this.views || 1
    return (votes / views) * 100
  }
}
