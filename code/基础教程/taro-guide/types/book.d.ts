interface Book {
  id: number;
  name: string;
  authors: number[];
  coverUrl: string;
  isbn: string;
  publicationTime: string;
  presses: number[];
  desc: string;

  // 自定义字段
  authorList?: Author[];
  pressNames?: string[];
}
