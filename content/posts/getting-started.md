+++
title = "Project Guide: Getting Started & Customization"
date = 2026-01-24
taxonomies.categories = ["Guide"]
taxonomies.tags = ["zola", "documentation", "workflow"]
summary = "A comprehensive guide to the CS220 Portfolio customizations, setup instructions, and how to write new content."
+++

# Welcome to Your New Portfolio

This project is a customized Zola site using the **Serene** theme with significant enhancements. This guide covers what has been modified, how to run the project, and how to create new content.

---

## 1. Customizations & Features

We have transformed the base theme into a portfolio tailored for a Rust/Systems engineer.

### 🎨 Kanagawa Theme System
The site uses the **Kanagawa** color palette by default.
- **Dark Mode (Default)**: Kanagawa Wave (`#1F1F28` background).
- **Light Mode**: Kanagawa Lotus (Toggleable).
- **Typography**: Custom CSS variables for consistent fonts and colors.

### 📑 Tabbed Content (Starlight-Style)
We implemented a robust tab system perfect for showing code side-by-side (e.g., Cargo vs Rustc).
- **Flush Design**: Code blocks sit flush against the tab navigation, looking like a native IDE.
- **Automatic Hydration**: No complex attributes needed; just use the shortcode.

**Usage:**
```markdown
{%/* tabs(unique_id="example") */%}
    {%/* tab(title="Command") */%}
    ... content ...
    {%/* end */%}
    {%/* tab(title="Result") */%}
    ... content ...
    {%/* end */%}
{%/* end */%}
```
*(Remove the `/* */` comments when using)*

### 📐 Mathematical Notation
KaTeX support is enabled for elegant math rendering.
- Inline: `$ E = mc^2 $`
- Block: `$$ ... $$`

### 🔧 Clean Git History
The repository history was reconstructed to be clean and professional:
- **Core**: Basic scaffolding.
- **Theme**: Custom CSS and palette.
- **Components**: JS and Shortcodes.
- **Content**: Markdown files.

---

## 2. Setup & Running

### Prerequisites
- **Zola**: [Install Zola](https://www.getzola.org/documentation/getting-started/installation/) (Ensure it's accessible in your PATH).
- **Git**: For version control.

### Installation
```bash
# 1. Clone the repository
git clone <your-repo-url> cs220-portfolio

# 2. Initialize submodules (for the theme)
cd cs220-portfolio
git submodule update --init --recursive
```

### Running Locally
To start the development server with live reload:
```bash
zola serve
```
Visit `http://127.0.0.1:1111` (or the port shown in your terminal).

---

## 3. Creating Content

### Creating a New Post
1.  Create a Markdown file in `content/posts/`. Use a filename based on the date and title, e.g., `2026-01-25-rust-ownership.md`.
2.  Add the **Front Matter** at the top of the file:

```toml
+++
title = "Understanding Rust Ownership"
date = 2026-01-25
taxonomies.categories = ["Rust"]
taxonomies.tags = ["memory-safety", "systems"]
summary = "Deep dive into the borrow checker."
+++
```

### Writing the Body
Write standard Markdown. You can use:
- **Headers**: `# Title`, `## Section`
- **Code Blocks**: \`\`\`rust ... \`\`\`
- **Shortcodes**: Tabs (as shown above), Images, etc.

---

## 4. Maintenance

- **Styles**: Edit `templates/_custom_css.html` to tweak the theme.
- **Config**: Edit `config.toml` for site-wide settings (title, description, navigation).
- **Ignores**: The `.gitignore` is set up to exclude build artifacts (`public/`) and editor files.

---

*Happy Hacking!*
