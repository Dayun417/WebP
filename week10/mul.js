// 워커 스레드에서 실행되는 코드
self.onmessage = function (e) {
    const { a, b } = e.data; 
  
    const a2 = parseInt(a, 10);
    const b2 = parseInt(b, 10);
  
    let mul = a2 * b2;
  
    self.postMessage(mul);
  }
