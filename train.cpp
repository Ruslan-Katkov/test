#include <iostream>
using namespace std;

char enteredSymbol;
int codeAscii;
int myProvaider;
int targetProvaider;
float callPrice = 0;
float callTotalMinutes;
float cashEveryLines = 0.5; // Стоимость каждой строки напсанной Васей (50$ / 100 строк)
int penaltyPerDelay = 20;
double salary;
int delayCount;
int codeLinesCount;
int menuItem;
int main()
{
  cout << "Введите число, букву или знак препинания: ";
  cin >> enteredSymbol;
  cout << enteredSymbol << "\n";
  codeAscii = char(enteredSymbol);
  cout << codeAscii << "\n";
  if (codeAscii <= 90 && codeAscii >= 65)
  {
    cout << "Это буква в диапазоне A - Z ";
  }
  else if (codeAscii <= 122 && codeAscii >= 97)
  {
    cout << "Это буква в диапазоне a - z \n";
  }
  else if (codeAscii <= 57 && codeAscii >= 48)
  {
    cout << "Это число в диапазоне 0 - 9 \n";
  }
  else
  {
    cout << "Это знак препинания или другое \n";
  }

  cout << "1. Билайн\n";
  cout << "2. МТС\n";
  cout << "3. Мегафон\n";
  cout << "Какой у вас оператор?\n";
  cin >> myProvaider;

  cout << "1. Билайн - стоимость минуты 1.3руб.\n";
  cout << "2. МТС - стоимость минуты 1.5руб.\n";
  cout << "3. Мегафон - стоимость минуты 1.1руб.\n";
  cout << "Выберите оператора на которого вы звоните\n";
  cin >> targetProvaider;

  if (myProvaider != targetProvaider)
  {
    cout << "Сколько минут вы хотите разговаривать?\n";
    cin >> callTotalMinutes;

    switch (targetProvaider)
    {
    case 1:
      callPrice = callTotalMinutes * 1.3;
      break;
    case 2:
      callPrice = callTotalMinutes * 1.5;
      break;
    case 3:
      callPrice = callTotalMinutes * 1.1;
      break;
    }
  }
  cout << "Стоимость разговора " << callPrice << " рублей\n";

  cout << "1. Вычислить количество строк\n";
  cout << "2. Вычислить количество опозданий\n";
  cout << "3. Вычислить доход\n";
  cin >> menuItem;
  switch (menuItem)
  {
  case 1:
    cout << "1. Желаемый доход Васи\n";
    cin >> salary;
    cout << "2. Количество опозданий\n";
    cin >> delayCount;
    codeLinesCount = (salary / cashEveryLines) + ((delayCount * penaltyPerDelay) / cashEveryLines);
    cout << "Количество строк " << codeLinesCount << "\n";
    break;
  case 2:
    cout << "1. Количество строк кода Васи\n";
    cin >> codeLinesCount;
    cout << "2. Желаемый обьем зарплаты\n";
    cin >> salary;
    delayCount = (salary - (codeLinesCount *
                            cashEveryLines)) /
                 penaltyPerDelay;
    cout << "Вася может опоздать " << delayCount << " раз\n";
    break;
  case 3:
    cout << "1. Количество строк кода Васи\n";
    cin >> codeLinesCount;
    cout << "2. Количество опозданий\n";
    cin >> delayCount;
    salary = (codeLinesCount * cashEveryLines) - (delayCount * penaltyPerDelay);
    if (0 > salary)
    {
      cout << "Вася вы банкрот\n"
           << salary << " $\n";
    }
    else
    {
      cout << "Доход Васи \n"
           << salary << " $\n";
    }
  }
}