# 📘 GitHub Version Control Practical

## 🎯 Aim
To create a GitHub account, create a repository, and push local code using Git commands.

---

## 🧑‍💻 Step 1: Create GitHub Account

1. Open https://github.com  
2. Click on **Sign Up**  
3. Enter email, username, and password  
4. Verify email  

📸 Screenshot:  
![GitHub Signup](images/signup.png)

---

## 📁 Step 2: Create New Repository

1. Click on **"+" icon → New Repository**  
2. Enter repository name  
3. Select Public/Private  
4. Click **Create Repository**

📸 Screenshot:  
![Create Repo](images/create-repo.png)

---

## 💻 Step 3: Initialize Git Repository

```bash
git init
```

---

## 📝 Step 4: Add Files to Git

```bash
git add .
git commit -m "Initial commit"
```

📸 Screenshot:
![Git Add Commit](images/git-add.png)

---

## 🔗 Step 5: Connect to GitHub

```bash
git remote add origin https://github.com/your-username/your-repo.git
```

---

## 📤 Step 6: Push to GitHub

```bash
git push -u origin main
```

📸 Screenshot:
![Git Push](images/git-push.png)

---

## ✅ Verification

Open your GitHub repository and check if files are uploaded successfully.

📸 Screenshot:
![GitHub Repo](images/github-repo.png)

---

## 📚 Commands Summary

```bash
git init
git add .
git commit -m "message"
git remote add origin <url>
git push -u origin main
```

---

## 💡 Tips

- Use meaningful commit messages  
- Keep repositories organized  
- Practice regularly to improve speed
