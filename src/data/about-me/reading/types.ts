export interface BookRecord {
  title: string,
  series?: string,
  installment?: number,
  author?: string,
  start: Date,
  finish?: Date,
}

export interface Reading {
  readingLog: BookRecord[],
}
