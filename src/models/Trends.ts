export class TTrendItem {
  public id?: string
  public imageSrc!: string
  public category?: number
  public votes?: number
  public views?: number
  public lang?: string
}

export class TrendItem extends TTrendItem {
  constructor(t: TTrendItem) {
    super()
    this.id = t.id
    this.imageSrc = t.imageSrc
    this.votes = t.votes || 0
    this.views = t.views || 0
  }

  public getPercent() {
    const votes = this.votes || 1
    const views = this.views || 1
    return (votes / views) * 100
  }
}
