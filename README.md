# Intro to React

### Kappa Theta Pi – Spring 2026 Rush

**Workshop Slides:** [Rush Workshop SP26 Slides](./Rush%20Workshop%20SP26.pdf)

**Workshop Goal:**
Build a small interactive React portfolio app using **React + Vite + TypeScript**, then add **Tailwind**, **routing**, **props**, **state**, and finally **deploy to GitHub Pages**.

---

## ✅ Prerequisites

Make sure you have:

* A **GitHub account**
* **Node.js** installed
* An editor (**VS Code** or **IntelliJ WebStorm**)
* **Git** installed

---

## ⚛️ What is React?

React is:

* A **JavaScript library** for building user interfaces
* **Created and maintained by Facebook/Meta**
* **Component-based** (reusable UI pieces)
* Commonly used with modern tools for full-stack web development

### Why React?

Traditional websites reload entire pages. React apps feel faster because they are typically:

* **SPA (Single-Page Applications)** instead of **MPA (Multi-Page Applications)**

---

## 🧰 Today’s Tech Stack

* **React**
* **Vite**
* **TypeScript**
* **Tailwind CSS**
* **React Router**
* **GitHub** (version control + deployment)

---

## 🗂️ Agenda (Live Demo)

1. Ensure prerequisites
2. Run the dev server
3. Explore React + Vite structure
4. Learn TSX (`App.tsx`)
5. Build a component (`Header`)
6. Add styling (Tailwind)
7. Add navigation (React Router)
8. Use props + reusable components (`ProjectCard`)
9. Use state + events (`useState`, expand/collapse)
10. Deploy to GitHub Pages

---

## 🚀 1) Create a React + Vite + TypeScript Project

If using VS Code, in a terminal:

```bash
npm create vite@latest
```

* Choose a project name
* Select **React**
* Select **TypeScript**

If using WebStorm, click on New Project.

* Select Vite from the left hand menu
* Choose a project name
* Set the template to `React`
* Turn ON Typescript
* Click Create

The `npm create vite@latest` command should automatically enable the dev server. Otherwise, type:

```bash
npm run dev
```

Then, visit the local dev URL (usually http://localhost:5173).

---

## 📁 2) Understand the Default Vite Structure

Key files and folders:

* `public/` — Static files
* `src/` — The heart of the app
* `src/main.tsx` — React entry point
* `src/App.tsx` — Main component
* `src/App.css` — Global styles
* `src/assets/` — Images/media
* `index.html` — Where React attaches
* `vite.config.ts` — Vite configuration

---

## 🧩 3) TSX (TypeScript + JSX)

TSX allows you to write HTML-like UI inside TypeScript files.

* Combines **logic + UI**
* Must return a **single root element**

---

## 🧱 4) Component Basics: Build a Header

Create a header component in:

src/components/Header.tsx

Then temporarily replace `App.tsx` so it renders only this component.

---

## 🎨 5) Install Tailwind (Vite Method)

Install Tailwind:

npm install tailwindcss @tailwindcss/vite

Then:

1. Add the `tailwindcss()` plugin to `vite.config.ts`
2. Replace `index.css` with:

@import "tailwindcss";

---

## 🧭 6) Add Navigation (React Router)

Install router:

npm i react-router

Then:

* Add two nav links to your **Header**
* Wrap your app in **BrowserRouter** inside `main.tsx`
* Create two pages in `src/pages/`
* Add **Routes** inside `App.tsx`

Suggested pages:

* Home.tsx
* About.tsx

---

## ♻️ 7) Props + Reusable Components (ProjectCard)

Goal: Display multiple projects using a reusable card component.

Steps:

* Create project data in `src/data/projects.ts`
* Render it inside `Home.tsx`
* Create a reusable `ProjectCard` component
* Add Tailwind styling

---

## 🔁 8) State + Events (Expand/Collapse)

You will use:

* `useState`
* Conditional rendering
* A button to toggle expanded details

---

## 🌍 9) Deploy to GitHub Pages

Follow these steps to get your Vite + React app live on GitHub Pages.

### ⚙️ Step 1: Configure Vite for GitHub Pages

GitHub Pages serves your site from a **subpath**:

[https://username.github.io/repo-name/](https://username.github.io/repo-name/)

Because of this, Vite needs to know your repository name so it can build correct asset paths.

Open **vite.config.ts** and add the `base` property:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rush-workshop-26/', // replace with your repo name
})
```

#### Why this matters

Without this setting, your app will look for files at:

```bash
/assets/...
```

Instead of:

```bash
/repo-name/assets/...
```

That leads to **blank pages** or **missing styles/scripts** after deployment.

If your repository has a different name, replace:

```bash
/rush-workshop-26/
```

with your actual repo name.

### 📤 Step 2: Push Your Project to GitHub

Initialize and push your repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo_name>.git
git push -u origin main
```

Make sure the repository is set to **public**.

### 🚀 Step 3: Enable GitHub Pages Deployment

1. Go to **Settings → Pages** in your repository
2. Set **Source** to **GitHub Actions**
3. Create a new file at:

```bash
.github/workflows/deploy.yml
```

4. Paste in the deployment workflow provided in the workshop materials
5. Commit and push to `main`
6. Open the **Actions** tab to watch your site build and deploy

Once complete, your site will be live at:

https://username.github.io/repo-name/

---

## 🔮 Where to Go From Here

* Expand this into your own portfolio
* Improve the [**About**](src/pages/About.tsx) page
* Reference the KTP GitHub for examples
* Share your deployed link on your application (optional)
