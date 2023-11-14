export function operation(operator){
	const oprObject = {
		'+':add,
		'-':subtract,
		'*':product,
		'/':divide,
	}
	if(operator in oprObject)
		return oprObject[operator];
	return null;
}

export function add(first, second) {
  return first + second;
}

export function subtract(first, second) {
  return second - first;
}

export function product(first, second) {
  return first * second;
}

export function divide(first, second) {
  return second / first;
}