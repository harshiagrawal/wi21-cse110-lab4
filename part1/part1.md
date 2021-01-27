1. Line 11 would print out the value of i to the console which would be prices.length because since i is of type var, it has no block scope.
2. Line 12 would print out the discounted price to the console because it is a global variable (it has no block scope).
3. Line 13 would print out the final price to the console because it is also not limited to block scope and even though it is declared before the for loop, it is still updated (because it is a global variable).
4. The function would return [50,100,150] because in the for loop, each item in the prices array is being multiplied by the discount and rounded. After it is rounded to get the final price, it is being put into the discounted array for each item in the original prices array. Since we return discounted, these are the values that would be stored within the array.
5. Line 11 would give an error because line 5 is still considered part of a block so it is out of scope since it is of type let.
6. Line 12 would give an error because since it is defined within the block of code, it is out of scope so it will think there is no such variable.
7. Line 13 would print out the final price to the console because this variable is declared outside of the code block so it is a global variable.
8. The function would return [50, 100, 150] because the discounted array is a global let variable so it can be updated and returned after the for loop.
9. Line 11 would give an error because line 5 is still considered part of a block so it is out of scope.
10. Line 12 would give an error since it is a const variable declared in the for loop, it can only be accessed within the for loop block so it is out of scope.
11. Line 13 would print out 0 since it is declared as a const outside of the for loop, but it will not have its value updated within the for loop since it is of type const.
12. The function would return [0, 0, 0] because since it is declared as a const and is already assigned before the for loop, it cannot be reassigned so it cannot be updated within the for loop.
13.

A) student.name  
B) student['Grad Year']   
C) student.greeting()   
D) student['Favorite Teacher'].name     
E) student.courseLoad[0]

14.

A) Output was '32' because it is converting 2 to 3 since 3 is already a string. The addition sign is basically concatenating the two values into a string.   
B) Output was 1 because there is no equivalent of subtraction in string, so there is no overloaded operator.  
C) Output was 3 because null has the value of zero, so adding 3 + 0 gives you 3 since 3 was also a number.  
D) Output was '3null' because again the addition sign is overloaded so you concatenate the two strings.  
E) Output was 4 since true with numbers is equivalent to 1 so 3+1 gives you 4 since both values were numbers.  
F) Output was 0 because false is 0 in number and adding null to 0 is just 0.  
G) Output was '3undefined' because 3 was a string and it concatenated with undefined so the operator was overloaded to completely be a string.  
H) Output was NaN because since we are doing subtraction, that can't be done with strings, so when we have undefined, it is NaN as a number.  

15.

A) Output was true because the string is converted into a number and since 2 is greater than 1, we get true.   
B) Output was false because it is comparing the first characters first (it is comparing the ascii values) so it is comparing the equal amount of substrings.   
C) Output was true because it converts the string 2 as a number and 2 is equivalent to 2.   
D) Output was false because it is a strict equality so the data types need to also be the same.   
E) Output was false because true is basically a one and 1 does not equal 2.    
F) Output was true because they are both booleans and Boolean of anything positive (non zero) will give you one.   

16. Basically the main difference is that === is a strict equality where both data types must be the same in order for the operators to correctly function. If the data types are unmatched the expression would always return false. With ==, you are able to compare two different data types.    

17. 'How are you?' gets printed because the first if statement returns false because comparing 2 to true is asking if 2 is equal to 1 which is false so it goes to the next else if statement. The value of 2 is okay to have since any positive number that is non zero is considered to be true so that is why it goes into the else if block.   
18. Photo in directory
19. The function will return [6, 8, 10] since when we do callback(1+2) this results in 3 and then we muliply by 2 which results in 6. We know that we can only go through the loop once since the array is a const data type, so the result ends up being [6].
20. Photo in directory
21. The output would be 1, 4, 3, 2 on separate lines.
