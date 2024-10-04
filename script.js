function switchLanguage() {
  const selectedLanguage = document.getElementById("language-select").value;
  const title = document.getElementById("title");
  const dateLabel = document.getElementById("date-label");
  const topPrioritiesTitle = document.getElementById("top-priorities-title");
  const brainDumpTitle = document.getElementById("brain-dump-title");
  const summaryTitle = document.querySelector(".summary h2");

  if (selectedLanguage === "kh") {
    title.textContent = "ផែនការថ្មីប្រចាំថ្ងៃ";
    dateLabel.textContent = "កាលបរិច្ឆេទ :";
    topPrioritiesTitle.textContent = "អាទិភាពខ្ពស់ :";
    brainDumpTitle.textContent = "ការដាក់ទឹកចិត្ត";
    summaryTitle.textContent = "សេចក្តីសង្ខេបនៃការងារ";
  } else {
    title.textContent = "DAILY TIMEBOXING PLANNER";
    dateLabel.textContent = "DATE :";
    topPrioritiesTitle.textContent = "TOP PRIORITIES :";
    brainDumpTitle.textContent = "BRAIN DUMP";
    summaryTitle.textContent = "Summary of Tasks";
  }
}

document.querySelectorAll(".task-done").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const taskId = this.getAttribute("data-task");
    const taskInput = document.getElementById(`task-${taskId}`);
    const summaryList = document.getElementById("summary-list");

    if (this.checked) {
      const listItem = document.createElement("li");
      listItem.textContent = taskInput.value;
      listItem.classList.add("completed-task");
      summaryList.appendChild(listItem);
    } else {
      const items = summaryList.getElementsByTagName("li");
      for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === taskInput.value) {
          summaryList.removeChild(items[i]);
          break;
        }
      }
    }
  });
});
