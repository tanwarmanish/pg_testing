import * as $ from "./operators.js";

export function trim(query) {
  query = query.replace(/\s+/g, "");
  return query;
}

export function render(query) {
  const e = document.querySelector("#resultField");
  e.innerText = query;
}

export function validate(query) {
  const regex = /^\d+(?:[\+\-\*\/]\d+)+$/;
  return regex.test(query);
}

export function extract(query) {
  const regex = /(\d+|[\+\-\*\/])/g;
  return query.match(regex);
}

export function isNumber(value) {
  const regex = /^\d+$/;
  return regex.test(value);
}

export function isOperator(value) {
  const regex = /^[\+|\-|\*|\/]$/;
  return regex.test(value);
}

export function calc(query) {
  // split
  const matches = extract(query);
  // reduce
  let result, operation;
  for (let value of matches) {
    if (isNumber(value)) {
      if (result == undefined) result = +value;
			if(operation){
				result = operation(result,+value);
				operation=null;
			}
    } else if (isOperator(value)) {
			operation = $.operation(value);
    }
  }
  return result;
}
