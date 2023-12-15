---
title: Basic test
date: 1970-01-01
latex: True
hidden: True
---

# Basic test

## Section 1

### Section 1.1

#### Section 1.1.1

##### Section 1.1.1.1

## Section 2

To start a new line, simply end a line with two spaces. To create a new paragraph, use a blank line to seperate different lines.

This is a line.  
This is another line.

This is a paragraph.

This is **bold text**.  
Here is _italic ones_.  
We can also **_do both_**.

Clickable link: <https://example.com>.  
Email as well: <nospam@example.com>.  
Link with customized text: [CLICK ME!](/images/rick.gif).

Reference test:  
A planet is any of the large bodies that orbit the [Sun][], including [Mercury][1], [Venus][2], [Earth][3], [Mars][4], [Jupiter][5], [Saturn][6], [Uranus][7], and [Neptune][8], in order of closeness to the Sun.

[Sun]: https://en.wikipedia.org/wiki/Sun 'Sun'
[1]: https://en.wikipedia.org/wiki/Mercury_(planet)
[2]: https://en.wikipedia.org/wiki/Venus
[3]: https://en.wikipedia.org/wiki/Earth
[4]: https://en.wikipedia.org/wiki/Mars
[5]: https://en.wikipedia.org/wiki/Jupiter
[6]: https://en.wikipedia.org/wiki/Saturn
[7]: https://en.wikipedia.org/wiki/Uranus
[8]: https://en.wikipedia.org/wiki/Neptune

## Section 3

### Tables

|                  **Example**                  | **LaTex**                                   |
| :-------------------------------------------: | :------------------------------------------ |
| $$\displaystyle\sum_{k=1}^{\infty}{0.5^k}=1$$ | `\displaystyle\sum_{k=1}^{\infty}{0.5^k}=1` |
|      $$\displaystyle\int_1^2{3x^2}dx=7$$      | `\displaystyle\int_1^2{3x^2}dx=7`           |
|      $$n!=\displaystyle\prod_{i=1}^n i$$      | `n!=\displaystyle\prod_{i=1}^n i`           |

### Quotes

> Appear weak when you are strong, and strong when you are weak.
>
> \- Sun Tzu, _The Art of War_

> Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
>
> \- Abraham Lincoln, _The Gettysburg Address_

### Code blocks

```c
#include <stdio.h>
int main() {
    // This is a comment
    printf("Hello, World!");
    return 0;
}
```

### Images

This is Jupiter (Source: [NASA](https://photojournal.jpl.nasa.gov/catalog/PIA22942))

![Jupiter](/images/Jupiter1.jpg)

Jupiter is beautiful.
