#include <iostream>
#include <sstream>
#include <string>
#include "calcex.h"
#include "calculator.h"
using namespace std;

Calculator* calc;

int main(int argc, char* argv[]) {
   string line;

   ofstream out("a.ewe");
 
   try {

      cout << "Please enter a calculator expression: ";

      getline(cin, line);

      calc = new Calculator(out);

      calc->eval(line);

      delete calc;

   }
   catch(Exception ex) {
      cout << "Program Aborted due to exception!" << endl;
   }
}
   
