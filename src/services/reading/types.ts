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

export interface BooksPerYear {
  year: string,
  count: number,
}

export interface ReadingStats {
  stats: ReadingStat[],
  booksByYear: BooksPerYear[],
}
