export interface BookRecord {
  title: string,
  series?: string,
  installment?: number,
  author?: string,
  start: Date,
  finish?: Date,
}

export interface ReadingStat {
  name: string,
  value: string,
}

export interface Reading {
  readingLog: BookRecord[],
  stats: ReadingStat[],
}
