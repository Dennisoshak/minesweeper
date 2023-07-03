export const isBorder=(num)=>{
    
    if ((num>=0&&num<=7)||(num%8===0)||((num+1)%8===0)||(num>=56&&num<=63)){
        return true
    }
    return false
}

export const calculateNeighbours = (arr) => {
   
    for (let i = 0; i < arr.length; i++) {
      let n = 0;
      if (i === 0 || i % 8 === 0) {
        if (arr[i + 1] && arr[i + 1].isBomb) n++;
        if (arr[i - 8] && arr[i - 8].isBomb) n++;
        if (arr[i + 8] && arr[i + 8].isBomb) n++;
        if (arr[i - 7] && arr[i - 7].isBomb) n++;
      if (arr[i + 9] && arr[i + 9].isBomb) n++;
      } else if ((i + 1) % 8 === 0) {
        if (arr[i - 1] && arr[i - 1].isBomb) n++;
        if (arr[i - 8] && arr[i - 8].isBomb) n++;
        if (arr[i - 9] && arr[i - 9].isBomb) n++;
        if (arr[i + 7] && arr[i + 7].isBomb) n++;
        if (arr[i + 8] && arr[i + 8].isBomb) n++;
      } else {
        if (arr[i - 1] && arr[i - 1].isBomb) n++;
        if (arr[i + 1] && arr[i + 1].isBomb) n++;
        if (arr[i - 7] && arr[i - 7].isBomb) n++;
        if (arr[i - 8] && arr[i - 8].isBomb) n++;
        if (arr[i - 9] && arr[i - 9].isBomb) n++;
        if (arr[i + 7] && arr[i + 7].isBomb) n++;
        if (arr[i + 8] && arr[i + 8].isBomb) n++;
        if (arr[i + 9] && arr[i + 9].isBomb) n++;
      }
      arr[i].neighbour = n;
    }
    return arr;
  };


