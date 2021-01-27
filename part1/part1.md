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
12. The function would return [] because since it is declared as a const and is already assigned before the for loop, it cannot be reassigned so it cannot be updated within the for loop.
13.

A) student.name
B) student['Grad Year']
C) student.greeting()
D) student['Favorite Teacher'].name
E) student.courseLoad[0]
