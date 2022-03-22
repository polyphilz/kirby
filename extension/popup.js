function renderBlockList() {
  const ul = document.getElementById("blocklist");

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  chrome.storage.sync.get("kirbySites", (data) => {
    for (const url of data.sites) {
      const li = document.createElement("li");
      li.innerText = url;
      ul.appendChild(li);
    }
  });
}

const addForm = document.getElementById("add-form");
const addSiteButton = document.getElementById("add");
const removeSiteButton = document.getElementById("remove");
const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
const checkboxes = [];
for (const day of days) {
  const checkbox = document.getElementById(day);
  checkbox.onchange((value) => {
    if (value) {
      let blah = document.createElement("");
    }
  });
  checkboxes.push(checkbox);
}

addSiteButton.onclick = () => {
  const input = document.getElementById("add-site");
  const inputValue = input.value;

  if (!inputValue) {
    return;
  }

  chrome.storage.sync.get("kirbySites", (data) => {
    chrome.storage.sync.set({ sites: [...data.sites, inputValue] }, () => {
      renderBlockList();
      input.value = "";
    });
  });
};

removeSiteButton.onclick = () => {
  const input = document.getElementById("remove-site");
  const inputValue = input.value;

  if (!inputValue) {
    return;
  }

  chrome.storage.sync.get("kirbySites", (data) => {
    chrome.storage.sync.set(
      { sites: data.sites.filter((site) => site !== inputValue) },
      () => {
        renderBlockList();
        input.value = "";
      }
    );
  });
};

renderBlockList();
