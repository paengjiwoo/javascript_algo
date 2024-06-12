function solution(phone_book) {
  const book = new Map();
  for (let i = 0; i < phone_book.length; i++) {
    book.set(phone_book[i], i);
  }
    
  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 1; j < phone_book[i].length; j++) {
      if (book.has(phone_book[i].substr(0, j))) return false;
    }
  }
  return true;
}