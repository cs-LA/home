# Regular Expressions

### Exclude invalid characters from a string

Put all the characters that you want to disallow inside the square brackets `\[~\`^<>\]`

Add a ^ character to the beginning to say disallow the following characters

[^~`^<>]

Add a + to the end to check if one or more of these characters exist

[^~`^<>]+

Add the anchors around it

^[^~`^<>]+$

 

And you are all done:

string expression = @"^[^~`^<>]+$";

Regex regex = new Regex(expression);

regex.IsMatch("Hell~o");

The above should return false.
