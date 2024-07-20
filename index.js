import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getDatabase,
     ref,
     push,
     onValue,
     remove } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-77d51-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

onValue(referenceInDB, (snapshot) => {
    const snapshotValue = snapshot.val();
    if (snapshotValue) {
        const leads = Object.values(snapshotValue); // Corrected from Object.value to Object.values
        render(leads);
    } else {
        render([]); // Render an empty list if there are no leads
    }
});

deleteBtn.addEventListener("dblclick", () => {
    remove(referenceInDB)
    // Handle delete functionality here
});

inputBtn.addEventListener("click", () => {
    const leadUrl = inputEl.value.trim();
    if (leadUrl !== "") {
        push(referenceInDB, leadUrl);
        inputEl.value = "";
    }
});
