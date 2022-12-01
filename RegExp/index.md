# Regular Expressions

### Exclude invalid characters from a string

Put all the characters that you want to disallow inside the square brackets <code>\[~\`^<>\]</code>

Add a <code>^</code> character to the beginning to say *disallow* the following characters <code>[^~`^<>]</code>

Add a <code>+</code> to the end to check if *one or more of these characters* exist <code>[^~`^<>]+</code>

Add the *anchors* around it <code>^[^~`^<>]+$</code>

 

And you are all done:

<code>
 string expression = @"^[^~`^<>]+$";
 Regex regexp = new Regex(expression);
 regex.IsMatch("Hell~o");
</code>

... should return <code>false</code>.
