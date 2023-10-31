data = [
  {
    id: 1,
    name: "Software Development Process",
    desc: "Lorem ipsum dolor sit amet",
    literature: "Lorem ipsum dolor sit amet",
    teacher: "James Smith",
    year: "2023",
    grade: "5",
    schedule: "online",
    building: "Science Tower",
    room: "4B",
  },
  {
    id: 2,
    name: "Front-end Development",
    desc: "Lorem ipsum dolor sit amet",
    literature: "Lorem ipsum dolor sit amet",
    teacher: "James Smith",
    year: "2023",
    grade: "5",
    schedule: "online",
    building: "Science Tower",
    room: "4B",
  },
  {
    id: 3,
    name: "Back-end Development",
    desc: "Lorem ipsum dolor sit amet",
    literature: "Lorem ipsum dolor sit amet",
    teacher: "James Smith",
    year: "2023",
    grade: "5",
    schedule: "online",
    building: "Science Tower",
    room: "4B",
  },
];

let discTable = document.getElementById("disciplineBody");
let discMain = document.getElementById("disciplineMain");
let i = 1;

data.forEach((disc) => {
  let newRow = document.createElement("tr");
  newRow.id = disc["id"];

  let noCol = document.createElement("td");
  noCol.textContent = i;

  let discCol = document.createElement("td");
  discCol.textContent = disc["name"];

  let actionCol = document.createElement("td");
  let actionDiv = document.createElement("div");
  actionDiv.classList.add("flex", "gap-[6px]");

  let imgEdit = document.createElement("img");
  let imgDelete = document.createElement("img");
  imgEdit.src = "./assets/icon/bx_edit.png";
  imgDelete.src = "./assets/icon/delete.png";

  let modalEditBtn = document.createElement("button");
  modalEditBtn.setAttribute("data-toggle", "modal");
  let id_edit = "#edit_disc_" + disc["id"];
  modalEditBtn.setAttribute("data-target", id_edit);

  let modalDeleteBtn = document.createElement("button");
  modalDeleteBtn.setAttribute("data-toggle", "modal");
  let id_delete = "#delete_disc_" + disc["id"];
  modalDeleteBtn.setAttribute("data-target", id_delete);

  modalEditBtn.appendChild(imgEdit);
  modalDeleteBtn.appendChild(imgDelete);

  actionDiv.appendChild(modalEditBtn);
  actionDiv.appendChild(modalDeleteBtn);
  actionCol.appendChild(actionDiv);

  newRow.appendChild(noCol);
  newRow.appendChild(discCol);
  newRow.appendChild(actionCol);
  discTable.appendChild(newRow);
  i += 1;

  let modalEdit = document.createElement("div");
  modalEdit.innerHTML = `
    <div class="modal fade" id="edit_disc_${disc["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_deny_${disc["id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
            <div>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="mt-8">
                <span class="modal-title text-[24px] border-b-4 border-[#2D85C5] pb-2 font-bold" id="exampleModalLabel">Edit Discipline</span>    
                <div class="mt-4">
                    <form> 
                        <div class=" mb-3">
                            <label class="font-bold">Discipline</label> <br/>
                            <input class="w-100 border rounded p-2 border-[#2D85C5]" type="text" placeholder="${disc["name"]}" />
                        </div>
                        <div class="flex justify-end gap-2 mt-8">
                            <button type="button" class="btn btn-edit-no" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-edit-yes">Save Changes</button>
                        </div>
                        
                    </form>
                <div>
            </div>

                
            </div>
            
            </div>
        </div>
    </div>
    `;

  let modalDelete = document.createElement("div");
  modalDelete.innerHTML = `
     <div class="modal fade" id="delete_disc_${disc["id"]}"" tabindex="-1" role="dialog" aria-labelledby="Label_delete_${disc["id"]}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
             <div class="modal-header">
               
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="font-bold">Are you sure you want to remove this data? </p>
                <p>You won’t be able to undo this action</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-deny-no" data-dismiss="modal">No</button>
                <button type="button" class="btn btn-deny-yes">Yes</button>
            </div>
            </div>
        </div>
        </div>
  `;
  discMain.appendChild(modalDelete);
  discMain.appendChild(modalEdit);
});
