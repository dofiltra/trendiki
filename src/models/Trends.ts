export class TTrendItem {
  public id?: string
  public imageSrc!: string
  public votes?: number
}

export class TrendItem extends TTrendItem {
  constructor(t: TTrendItem) {
    super()
    this.id = t.id
    this.imageSrc = t.imageSrc
    this.votes = t.votes || 0
  }

  public getPercent(maxVotes: number) {
    return (((this.votes || 0) + 1) / (maxVotes + 1)) * 100
  }
}
