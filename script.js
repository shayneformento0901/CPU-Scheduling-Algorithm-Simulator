function generateInputs() {
  let n = document.getElementById("num").value;
  let container = document.getElementById("inputs");
  container.innerHTML = "";

  for (let i = 1; i <= n; i++) {
    let div = document.createElement("div");
    div.className = "process";

    div.innerHTML = `
      <span class="p-label">P${i}</span>
      <label>AT:</label><input type="number" id="at${i}">
      <label>BT:</label><input type="number" id="bt${i}">
      <label>PR:</label><input type="number" id="pr${i}">
    `;

    container.appendChild(div);
  }
}

function getProcesses() {
  let n = document.getElementById("num").value;
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let at = parseInt(document.getElementById("at" + i).value);
    let bt = parseInt(document.getElementById("bt" + i).value);
    let pr = parseInt(document.getElementById("pr" + i).value);

    if (isNaN(at) || isNaN(bt) || isNaN(pr) || bt <= 0 || at < 0) {
      alert("Invalid input!");
      return null;
    }

    arr.push({
      id: "P" + i,
      at,
      bt,
      priority: pr
    });
  }

  return arr;
}

function nonPreemptive(processes) {
  let time = 0, done = 0;
  let n = processes.length;
  let visited = Array(n).fill(false);

  let result = [];
  let gantt = [];

  while (done < n) {
    let idx = -1;

    for (let i = 0; i < n; i++) {
      if (
        processes[i].at <= time &&
        !visited[i] &&
        (idx === -1 ||
          processes[i].priority < processes[idx].priority ||
          (processes[i].priority === processes[idx].priority &&
            processes[i].at < processes[idx].at))
      ) {
        idx = i;
      }
    }

    if (idx === -1) {
      time++;
      continue;
    }

    let p = processes[idx];
    let start = time;

    time += p.bt;

    result.push({
      ...p,
      ct: time,
      tat: time - p.at,
      wt: (time - p.at) - p.bt
    });

    gantt.push({ id: p.id, start, end: time });

    visited[idx] = true;
    done++;
  }

  return { result, gantt };
}

function preemptive(processes) {
  let n = processes.length;
  let time = 0, done = 0;

  let remaining = processes.map(p => p.bt);
  let ct = Array(n).fill(0);

  let gantt = [];
  let last = -1;

  while (done < n) {
    let idx = -1;

    for (let i = 0; i < n; i++) {
      if (
        processes[i].at <= time &&
        remaining[i] > 0 &&
        (idx === -1 ||
          processes[i].priority < processes[idx].priority ||
          (processes[i].priority === processes[idx].priority &&
            processes[i].at < processes[idx].at))
      ) {
        idx = i;
      }
    }

    if (idx === -1) {
      time++;
      continue;
    }

    if (last !== idx) {
      gantt.push({ id: processes[idx].id, start: time });
      last = idx;
    }

    remaining[idx]--;
    time++;

    if (remaining[idx] === 0) {
      ct[idx] = time;
      done++;
    }

    gantt[gantt.length - 1].end = time;
  }

  let result = processes.map((p, i) => ({
    ...p,
    ct: ct[i],
    tat: ct[i] - p.at,
    wt: (ct[i] - p.at) - p.bt
  }));

  return { result, gantt };
}

function display(res) {
  let tbody = document.querySelector("#table tbody");
  tbody.innerHTML = "";

  let totalWT = 0, totalTAT = 0;

  res.forEach(p => {
    totalWT += p.wt;
    totalTAT += p.tat;

    tbody.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.at}</td>
        <td>${p.bt}</td>
        <td>${p.priority}</td>
        <td>${p.ct}</td>
        <td>${p.tat}</td>
        <td>${p.wt}</td>
      </tr>
    `;
  });

  document.getElementById("avg").innerText =
    "Average WT: " + (totalWT / res.length).toFixed(2) +
    " | Average TAT: " + (totalTAT / res.length).toFixed(2);
}


function displayGantt(gantt) {
  let chart = "";
  let timeLine = "0";

  gantt.forEach(g => {
    chart += `| ${g.id} `;
    timeLine += `   ${g.end}`;
  });

  document.getElementById("gantt").innerText =
    chart + "|\n" + timeLine;
}

function runSimulation() {
  let processes = getProcesses();
  if (!processes) return;

  let algo = document.getElementById("algo").value;

  let output;

  if (algo === "Non") {
    output = nonPreemptive(processes);
  } else if (algo === "Pre") {
    output = preemptive(processes);
  } else {
    alert("Please select an algorithm!");
    return;
  }

  display(output.result);
  displayGantt(output.gantt);
}