+++
title = "Lab 01: Safe Arithmetic"
date = 2026-02-02
draft = false

[taxonomies]
categories = ["CS220"]
tags = ["Rust"]

[extra]
lang = "en"
toc = true
+++

In the world of systems programming, how we handle numerical boundaries defines the robustness of our software. Today, I'm reflecting on the first steps of my journey through **CS220: Programming Principles**, focusing on basic arithmetic operations and the critical decision-making behind overflow handling.

<!-- more -->

## The Challenge: Assignment 1

The task was deceptively simple: implement addition and subtraction for unsigned words (`usize`). However, the real lesson lies in the edge cases—specifically, what happens when we exceed the maximum or minimum bounds of a type?

### Implementation

In Rust, the choice of arithmetic behavior is explicit. For this assignment, the requirement was to **wrap around** in case of overflow.

```rust
/// Adds two unsigned words. If overflow happens, just wrap around.
pub fn add(lhs: usize, rhs: usize) -> usize {
    lhs.wrapping_add(rhs)
}

/// Subtracts two unsigned words. If overflow happens, just wrap around.
pub fn sub(lhs: usize, rhs: usize) -> usize {
    lhs.wrapping_sub(rhs)
}
```

## Academic Rigour vs. Industrial Safety

While a simple `+` or `-` operator might suffice in some languages, Rust forces us to think about the consequences.

### Why `wrapping_add`?

In many systems, silent overflow is a source of critical bugs and security vulnerabilities (like buffer overflows). Standard Rust integer arithmetic behaves differently depending on the build profile:
- **Debug builds**: Panics on overflow, helping developers catch logic errors early.
- **Release builds**: Wraps around (Two's Complement), prioritizing performance but potentially masking issues.

By using `wrapping_add` and `wrapping_sub`, we make the intent crystal clear. We are explicitly telling the compiler and future readers: *"We expect and allow wrapping behavior here."*

## Taking it Further

In production systems, we often have other tools at our disposal depending on the risk profile:
1. **`checked_add`**: Returns an `Option`, allowing the program to handle the error gracefully without crashing.
2. **`saturating_add`**: Clamps the result at the maximum/minimum value of the type, often used in graphics or audio processing.
3. **`overflowing_add`**: Returns a tuple containing the result and a boolean indicating if overflow occurred.

## Reflections

Assignment 1 isn't just about syntax; it's about the **systems mindset**. It's the beginning of understanding that in a safe systems language like Rust, every operation is a conscious design choice.

Stay tuned as I continue to chronicle these deep-dives into the foundations of safe computing.
