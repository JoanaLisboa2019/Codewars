/*
Task
Given Two intgers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .

Input >> Output Examples
1- Add (5,19) ==> return (24) 

2- Add (-27,18) ==> return (-9)

3- Add (-14,-16) ==> return (-30)
*/

function add(x, y) {
    return y ? add(x^y, (x&y) << 1) : x;
}
