![](http://puu.sh/biuez/beddc77692.png)

DOTLANG
A Developement language based on DOTS and interpreted with jQuery

### Why math oriented ? 
Cause it's all about numbers, and we're working on an alphabet version. 
Which will be, the alphabet oriented version. 

## The thing 
Non interpreted

.
.. 
...
....
.....
......
.......
........
.........
..........


Interpreted

	1
	2
	3
	4
	5
	6
	7
	8
	9
	10

## Other thing to do with
From

	.
	+
	.
	=
	..
To 

	1
	+
	1
	=
	2

## Concrete example 
	... + .... + ... = 10
	..... - .... = 1
	... * .... = 24
	........ / .... = 3

## How to ? 
Just load the dotlang interpreter at the end of your doc, just before the closing `</body>` tag. 
```html
<script type="text/javascript" src="path/to/dotlang.min.js"></script>
```

### Then

Then open a script tag with the proper `type="text/x-dotlang` attribute.
````html
<script type="text/x-dotlang">
	..
	.
	...
	..
	.....
	.
</script>

Then, just write dotlang ! 
