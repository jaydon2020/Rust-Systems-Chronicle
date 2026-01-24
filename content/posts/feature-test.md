+++
title = "Feature Test: Kanagawa & Annotations"
date = 2026-01-24
taxonomies.categories = ["Test"]
taxonomies.tags = ["rust", "kanagawa", "features"]
summary = "A comprehensive test of the new theme features: Dark mode, Math, and Annotations."
+++

# Testing New Features

This post demonstrates the customized features of the CS220 Portfolio.

## 1. Kanagawa Theme
You should see the **Kanagawa Wave** (Dark) palette by default, featuring Sumi Ink backgrounds and Fuji White text. Toggle the theme button in the header to switch to **Kanagawa Lotus** (Light).

## 2. Mathematical Notation
We enabled KaTeX support. Here is the Schrödinger equation:

$$
i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r},t) = \hat{H} \Psi(\mathbf{r},t)
$$

And inline math: $ e^{i\pi} + 1 = 0 $.

## 3. Tabbed Content
We implemented code tabs to show different languages or tools.

{% tabs(unique_id="demo-tabs") %}
    {% tab(title="Cargo") %}
```bash
cargo new my_project
cd my_project
cargo run
```
    {% end %}
    {% tab(title="Rustc") %}
```bash
rustc main.rs
./main
```
    {% end %}
{% end %}

## 4. Tags
Check the post list (homepage or blog index). The tags `rust`, `kanagawa`, and `features` should appear as plain, italicized text next to the date, without button styling.
