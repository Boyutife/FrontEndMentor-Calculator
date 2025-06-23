function calculate(expr) {
  try {
    expr = expr.replace(/x/gi, '*');
    check(expr);
    const result = new Function(`return ${expr}`)();

    if (!isFinite(result) || isNaN(result)) {
      return 'Error';
    }

    if (result % 1 !== 0) {
      return parseFloat(result.toFixed(10));
    }

    let resultStr = result.toString();

    if (resultStr.length > 20) {
      resultStr = Number(result).toExponential(6);
    }

    return resultStr.length <= 20 ? resultStr : resultStr.slice(0, 20);
  } catch (err) {
    console.log(err);
    return 'Error';
  }
}

function check(expr) {
  if (!/^[0-9+\-*/.]+$/.test(expr)) {
    throw 'Invalid expression';
  }
}

export default calculate;
