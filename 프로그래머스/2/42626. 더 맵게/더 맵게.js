class MinHeap {
  constructor() {
    this.heap = [null];
  }
  length() {
    return this.heap.length-1;
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  add(num) {
    this.heap.push(num);
    this.bubble_up();
  }
  bubble_up() {
    let cur = this.heap.length - 1;
    let parent = ~~(cur / 2);
    while (parent && this.heap[cur] < this.heap[parent]) {
      this.swap(cur, parent);
      cur = parent;
      parent = ~~(cur / 2);
    }
  }
  delete() {
    let min = this.heap[1];
    if (this.heap.length <= 2)
    {      this.heap = [null];
        return min;
    }
    this.heap[1] = this.heap.pop();
    let cur = 1;
    let left = cur * 2;
    let right = cur * 2 + 1;
    let smallIdx = cur;
    while (1) {
      if (left < this.heap.length && this.heap[smallIdx] > this.heap[left])
        smallIdx = left;
      if (right < this.heap.length && this.heap[smallIdx] > this.heap[right])
        smallIdx = right;
      if (smallIdx != cur) {
        this.swap(smallIdx, cur);
        cur = smallIdx;
        left = cur * 2;
        right = cur * 2 + 1;
      } else break;
    }
    return min;
  }
}

function solution(scoville, K) {
  let minHeap = new MinHeap();
  let count = 0;
  for (let i of scoville) minHeap.add(i);
  while (minHeap.heap[1] < K && minHeap.length() > 1) {
    let min1 = minHeap.delete();
    let min2 = minHeap.delete();
    let temp = min1 + min2 * 2;
    minHeap.add(temp);
    count++;
  }
  if (minHeap.heap[1] < K) return -1;
  else return count;
}