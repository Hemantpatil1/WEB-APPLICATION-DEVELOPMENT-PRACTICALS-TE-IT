# 🐳 Docker Container Environment Practical

## 🎯 Aim
To create a Docker container environment using Docker Desktop and execute commands inside the container.

---

## 🧠 Theory

- Docker is a containerization platform used to develop, ship, and run applications.
- Containers are lightweight environments that include all dependencies required to run an application.
- NVIDIA Docker allows containers to use GPU resources for high-performance computing.

---

## ⚙️ System Requirements

- Windows 10/11 (64-bit)
- Docker Desktop installed
- WSL2 enabled
- Internet connection

---

## 🛠️ Steps to Perform Practical

---

### 🔹 Step 1: Install Docker Desktop

1. Download Docker Desktop from https://www.docker.com/
2. Install and restart the system

📸 Screenshot:  
![Docker Install](\Docker Install.png)

---

### 🔹 Step 2: Enable WSL2

Run in PowerShell (Admin):


```bash
wsl --install
wsl --set-default-version 2
```

### 🔹 Step 3: Verify Docker Installation
```bash
docker --version
```
