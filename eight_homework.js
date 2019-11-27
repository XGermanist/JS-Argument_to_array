function tryCode()
{
  'use strict';
  var inputCode = prompt("Введите код, который вы хотите запустить, и нажмите окей");
  if (inputCode != null)
  {
    try
    {
      //(function(){inputCode;})(); не работает
      eval(inputCode);
      console.log("Код выполнен без ошибок");
    }
    catch (ex)
    {
      console.log("Найдена ошибка: " + ex);
    }
  }
  else {
    console.log("Вы ничего не ввели");
  }
}

function filterByType()
{
  var result = [];
/* ни хрена не пашет, по любому выкидывает в первый иф, в каком порядке ни пиши, хз
  var enteredDataType = prompt("Введите тип данных, которые будем искать в массиве");
  var tryForNumber = parseInt(enteredDataType);

  if (tryForNumber != NaN)
  {
    var dataType = typeof tryForNumber;
  }
  else if (enteredDataType == ('true') || ('false'))
  {
    var isBoolean = true;
    var dataType = typeof isBoolean;
  }
  console.log(dataType);
*/
var args = Array.from(arguments);
var method = typeof args[0];
//console.log(method);
var forsort = args.slice(1, args.length);
//console.log(forsort);
for (i=0; i <= forsort.length; i++)
{
  if (typeof forsort[i] == method)
  {result.push(forsort[i])}
}
console.log(result);
}
//filterByType(2, 7, "One", true, 4, false, "somestring", 12, true, "someotherstring") );
