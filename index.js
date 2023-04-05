function solution(a) {
  
  let currentValue
  let duplicate = -1
  const numbers = new Set ()
  for (let i = 0; i < a.length; i++) { 
    currentValue =a[i]
      if (numbers.has(currentValue)) {
        
  duplicate=currentValue

  break
      }
      
numbers.add(a[i])
  }

  return duplicate
 
}
