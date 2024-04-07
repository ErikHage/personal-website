export interface BookRecord {
  title: string,
  start: Date,
  finish?: Date,
}

export interface Reading {
  readingLog: BookRecord[],
}
