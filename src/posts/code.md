---
title: Code test
date: 2023-12-25
---

## C++ Example

```cpp
#include<iostream>
using namespace std;

int factorial(int n);

int main() {

    int n;

    cout << "Enter a non-negative integer: ";
    cin >> n;

    if (n < 0) cout << "Invalid input!";
    else cout << "Factorial of " << n << " is " << factorial(n);

    return 0;
}

int factorial(int n) {
    /*
    This is a recursive function to find the
    factorial of a non-negative integer
    */
    if(n > 1)
        return n * factorial(n - 1);
    else
        return 1; // Factorial of 0 is 1
}
```

## Python Example

```python
def factorial(x):
    """
    This is a recursive function to find
    the factorial of a non-negative integer
    """

    if x <= 1:
        return 1 # Factorial of 0 is 1
    else:
        # recursive call to the function
        return (x * factorial(x - 1))

num = int(input("Enter a non-negative number: "))

if num < 0:
    print("Invalid input!")
else:
    print("The factorial of", num, "is", factorial(num))
```

## Javascript Example

```js
function factorial(x) {
    /*
    This is a recursive function to find the
    factorial of a non-negative integer
    */

    if (x === 0 || x === 1) {
        return 1 // Factorial of 0 is 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 9

// calling factorial() if num is non-negative
if (num < 0) {
    console.log('Invalid input!')
} else {
    let result = factorial(num)
    console.log(`The factorial of ${num} is ${result}`)
}
```

## HTML Example

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%sveltekit.assets%/favicon.png" />
        <meta name="viewport" content="width=device-width" />
        %sveltekit.head%
    </head>
    <body data-sveltekit-preload-data="hover">
        <div style="display: contents">%sveltekit.body%</div>
    </body>
</html>
```

## CSS Example

```css
/* Use local font */
@font-face {
    font-family: 'MonaspaceRadon';
    src: url('/fonts/MonaspaceRadonVarVF.woff2') format('woff2');
}

.markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    font-family: 'MonaspaceRadon'; /* Use local font */
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
}

@media (prefers-color-scheme: dark) {
    .markdown-body {
        color-scheme: dark;
        --color-fg-default: #c9d1d9;
    }
}
```

## LaTeX Example

```latex
\documentclass{article}
\usepackage{graphicx}
\graphicspath{ {./images/} }

% This is a comment.

\begin{document}
The universe is beautiful.

\includegraphics[width=8cm]{universe}

An equation:

$$
\displaystyle\sum_{k=1}^{\infty}{0.5^k}=1
$$

\end{document}
```
