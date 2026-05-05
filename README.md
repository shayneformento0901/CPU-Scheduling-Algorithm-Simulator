# CPU-Scheduling-Algorithm-Simulator

Built using HTML for structure, CSS for styling, and JavaScript (ES6) for functionality.
![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)

---

##  Final Project – Platform Technologies

A **CPU Scheduling Simulator** that demonstrates how **Priority Scheduling Algorithms** work in operating systems. This project supports both **Non-Preemptive** and **Preemptive Priority Scheduling**, allowing users to input processes and visualize scheduling results in real time.

---

##  Project Objective

This project aims to:

- Simulate CPU scheduling using **Priority Scheduling**
- Help users understand process execution flow
- Compute:
  - Completion Time (CT)
  - Turnaround Time (TAT)
  - Waiting Time (WT)
- Visualize execution using a **Gantt Chart**

---

## Screenshots

###  Input Section 
![image alt](https://github.com/shayneformento0901/CPU-Scheduling-Algorithm-Simulator/blob/5341ebe58974e496ad5107a7b6587d277c14d80b/input.png)

### Process-input(Preemptive and Non-Preemptive)

![image alt](https://github.com/shayneformento0901/CPU-Scheduling-Algorithm-Simulator/blob/5341ebe58974e496ad5107a7b6587d277c14d80b/process-input.png)
![image alt](https://github.com/shayneformento0901/CPU-Scheduling-Algorithm-Simulator/blob/5341ebe58974e496ad5107a7b6587d277c14d80b/process-input(preemptive).png)

### Result(Output)

![Result](https://github.com/shayneformento0901/CPU-Scheduling-Algorithm-Simulator/blob/5341ebe58974e496ad5107a7b6587d277c14d80b/result.png)
![Result](https://github.com/shayneformento0901/CPU-Scheduling-Algorithm-Simulator/blob/5341ebe58974e496ad5107a7b6587d277c14d80b/result(pre).png)

#### Gantt Chart  
![Gantt Chart](https://github.com/shayneformento0901/CPU-Scheduling-Algorithm-Simulator/blob/5341ebe58974e496ad5107a7b6587d277c14d80b/gantt%20chart(pre).png)
![Gantt Chart](https://github.com/shayneformento0901/CPU-Scheduling-Algorithm-Simulator/blob/5341ebe58974e496ad5107a7b6587d277c14d80b/gantt%20chart(non-preemptive).png)

> Create a folder named `screenshots` and place your images there.

---

## Features

- ✔ Dynamic process input generation  
- ✔ Non-Preemptive Priority Scheduling  
- ✔ Preemptive Priority Scheduling  
- ✔ Real-time calculations  
- ✔ Gantt Chart visualization  
- ✔ Clean and interactive UI  

---

##  Technologies Used

- HTML  
- CSS  
- JavaScript  

---

## 📂 Project Structure

CPU-Scheduling-Algorithm-Simulator/

├── index.html  
├── style.css  
├── script.js  
└── screenshots/  
  ├── input.png  
  ├── results.png  
  └── gantt.png  

---

##  How to Run

1. Clone the repository  
   git clone https://github.com/your-username/CPU-Scheduling-Algorithm-Simulator.git  

2. Open the project folder  
   cd CPU-Scheduling-Algorithm-Simulator  

3. Open `index.html` in your browser  

---

##  How to Use

1. Enter number of processes  
2. Click Generate  
3. Input:
   - Arrival Time (AT)
   - Burst Time (BT)
   - Priority (PR)
4. Choose algorithm  
5. Click Run  
6. View results and Gantt chart  

---

##  Algorithm Overview

### 🔹 Non-Preemptive Priority Scheduling
- Highest priority process runs first  
- Once started, it runs until completion  

### 🔹 Preemptive Priority Scheduling
- Higher priority process can interrupt current process  
- More flexible and efficient  

---

## Output Explanation

| Term | Meaning |
|------|--------|
| PID | Process ID |
| AT | Arrival Time |
| BT | Burst Time |
| Priority | Lower value = higher priority |
| CT | Completion Time |
| TAT | Turnaround Time |
| WT | Waiting Time |

---

##  Example Gantt Chart

| P1 | P2 | P3 |
0    3    6    9

---

## Real-Life Application

This is similar to a hospital emergency room system:

- Critical patients are prioritized first  
- Less urgent cases wait  
- In preemptive scheduling, emergencies can interrupt ongoing tasks  

---

## Author

Shayne Formento  
Final Project – Platform Technologies  

---
