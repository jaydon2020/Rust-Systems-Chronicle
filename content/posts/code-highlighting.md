+++
title = "Code Highlighting Showcase"
date = 2026-01-24
taxonomies.categories = ["Demo"]
taxonomies.tags = ["syntax-highlighting", "kanagawa", "code"]
summary = "A demonstration of syntax highlighting for various languages and the code tab system."
+++

# Syntax Highlighting Test

This post demonstrates how code blocks are rendered using the **Kanagawa** theme and Zola's Syntect highlighter.

## Rust
Here is some idiomatic Rust code:

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }
}
```

## Python
Python scripts should look vibrant and readable:

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
```

## JavaScript / TypeScript
Frontend logic example:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', (e) => {
        console.log("Button clicked!");
        e.preventDefault();
    });
});
```

## Tabbed Code Blocks
Comparing implementations using our custom tab system:

{% tabs(unique_id="compare-impl") %}
    {% tab(title="Rust") %}
```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
    {% end %}
    {% tab(title="Python") %}
```python
def add(a, b):
    return a + b
```
    {% end %}
    {% tab(title="TypeScript") %}
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```
    {% end %}
{% end %}
