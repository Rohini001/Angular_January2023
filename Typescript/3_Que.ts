//3)Create an arrow function by which you will take input of string and you check given string is palindrome or not.
function reverse( str )						// This function is used to make string reverse
{
  // variable holds reverse string
  let rev_str = "";
  for( let i = str.length-1 ;i >= 0 ;i--)
  {
    rev_str+= str[i];
  }
  
  return rev_str;
}


function is_palindrome( str )						//by using this function will check string is palindrome or not
{
  var reverse_str = reverse(str);
  
  if( reverse_str === str)
  {
    console.log("String is palindrome ");
  }
  else
  {
    console.log("String is not palindrome")
  }
}

let test = "sanas";
is_palindrome(test);