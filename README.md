# 💼 Kiruba's Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS**.

> 🔗 **Live Site:** [https://kirubaharan181.github.io/kiruba-portfolio/](https://kirubaharan181.github.io/kiruba-portfolio/)

---

## 📌 Project Info

This project showcases my work, skills, resume, and projects using a fast and customizable front-end stack. It is hosted on **GitHub Pages** , supports easy updates and manual editing.

---

## ⚙️ Technologies Used

- ⚛️ **React**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 📄 **TypeScript**

---

## 🚀 Deployment

The site is automatically deployed to **GitHub Pages** using GitHub Actions.

### 🔄 Auto Deployment Flow:

1. Any push to the `main` branch triggers a GitHub Action.
2. The Vite project is built.
3. Output (`dist/`) is pushed to the `gh-pages` branch.
4. GitHub Pages serves the site from `https://kirubaharan181.github.io/kiruba-portfolio/`.

> 📁 Vite config includes:  
> `base: "/kiruba-portfolio/"` (required for correct GitHub Pages routing)

---

## 🛠️ Run Locally

To work on this project locally:

```bash
# Clone the repo
git clone https://github.com/kirubaharan181/kiruba-portfolio.git
cd kiruba-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
