
/**
 * Lấy danh sách ứng viên từ localStorage.
 * @returns {Array<object>} - Danh sách ứng viên đã lưu.
 * Created By hanv 16/12/2025
 */
function fetchCandidatesLists() {
    const candidates = JSON.parse(localStorage.getItem("candidates")) || [];
    return candidates;
}
/**
 * Hiển thị tổng số ứng viên trên giao diện.
 * @param {Array<object>} candidates - Danh sách ứng viên hiện có.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function totalCandidatesCount(candidates) {
    const totalCandidates = document.getElementById("total-candidates");
    totalCandidates.textContent = candidates.length;
}
/**
 * Tải ứng viên vào bảng khi khởi động trang.
 * @param {number} currentPage - Trang hiện tại.
 * @param {number} pageSize - Số bản ghi trên mỗi trang.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
(function loadCandidatesToTable(currentPage = 0, pageSize = 10) {

    const candidates = fetchCandidatesLists();
    const candidatesTableBody = document.getElementById("candidate-table-body");
    candidatesTableBody.innerHTML = "";
    totalCandidatesCount(candidates);
    for (let index = currentPage * pageSize; index < (currentPage + 1) * pageSize; index++) {
        if (index >= candidates.length) return;
        candidatesTableBody.innerHTML += `
            <tr id="candidate-${candidates[index].id}">
                <td>
                 <input type="checkbox" class="row-checkbox" onchange="changeToolbarCandidateWrapperWhenCheckboxChecked()"/>
                </td>
                <td>${candidates[index].phoneNumber}</td>
                <td>${candidates[index].candidateResource}</td>
                <td>
                <span class="avatar avatar-blue" style="background-color: ${stringToColor(autoGenerateAvatar(candidates[index].fullname))}">${autoGenerateAvatar(candidates[index].fullname)}</span>
                <div class="name-block">
                    <div class="name">${candidates[index].fullname ? candidates[index].fullname : '--'}</div>
                    <div class="sub">--</div>
                </div>
                </td>
                <td>${candidates[index].email ? candidates[index].email : '--'}</td>
                <td>${candidates[index].campaign ? candidates[index].campaign : '--'}</td>
                <td>${candidates[index].position ? candidates[index].position : '--'}</td>
                <td>${candidates[index].post ? candidates[index].post : '--'}</td>
                <td>${candidates[index].round ? candidates[index].round : '--'}</td>
                <td>
                    ${starIconGenerateByRate(candidates[index].rate)}
                </td>
                <td>${candidates[index].createdAt ? candidates[index].createdAt : '--'}</td>
                <td>${candidates[index].level ? candidates[index].level : '--'}</td>
                <td>${candidates[index].location ? candidates[index].location : '--'}</td>
                <td>${candidates[index].major ? candidates[index].major : '--'}</td>
                <td>${candidates[index].recentWorkplace ? candidates[index].recentWorkplace : '--'}</td>
                <td>${candidates[index].humanResource ? candidates[index].humanResource : '--'}</td>
                <td>${candidates[index].unitUsed ? candidates[index].unitUsed : '--'}</td>
                <td>${candidates[index].matchProfile ? candidates[index].matchProfile : '--'}</td>
                <td>${candidates[index].region ? candidates[index].region : '--'}</td>
                <td>${candidates[index].refferal ? candidates[index].refferal : '--'}</td>
                <td>${candidates[index].informationReceived ? candidates[index].informationReceived : '--'}</td>
                <td>${candidates[index].potentialStorage ? candidates[index].potentialStorage : '--'}</td>
                <td class="col-action">
                    <span class="icon-edit" onclick="openUpdateCandidateModal(${candidates[index].id})"></span>
                </td>
            </tr>
    `;
    }
})();

// Pagination functions start
let currentPage = 0;
let candidatesPagination = fetchCandidatesLists();
/**
 * Phân trang và render bảng ứng viên.
 * @param {Array<object>} candidates - Danh sách ứng viên cần hiển thị.
 * @param {number} currentPage - Trang hiện tại (zero-based).
 * @param {number} pageSize - Số bản ghi trên mỗi trang.
 * @returns {boolean} - Trả về false nếu không còn dữ liệu trang tiếp theo.
 * Created By hanv 16/12/2025
 */
function paginagationCandidatesTable(candidates, currentPage = 0, pageSize = 10) {

    const candidatesTableBody = document.getElementById("candidate-table-body");
    candidatesTableBody.innerHTML = "";
    totalCandidatesCount(candidates);
    for (let index = currentPage * pageSize; index < (currentPage + 1) * pageSize; index++) {
        if (index >= candidates.length) return false;
        candidatesTableBody.innerHTML += `
            <tr id="candidate-${candidates[index].id}">
                <td>
                 <input type="checkbox" class="row-checkbox" onchange="changeToolbarCandidateWrapperWhenCheckboxChecked()"/>
                </td>
                <td>${candidates[index].phoneNumber}</td>
                <td>${candidates[index].candidateResource}</td>
                <td>
                <span class="avatar avatar-blue" style="background-color: ${stringToColor(autoGenerateAvatar(candidates[index].fullname))}">${autoGenerateAvatar(candidates[index].fullname)}</span>
                <div class="name-block">
                    <div class="name">${candidates[index].fullname ? candidates[index].fullname : '--'}</div>
                    <div class="sub">--</div>
                </div>
                </td>
                <td>${candidates[index].email ? candidates[index].email : '--'}</td>
                <td>${candidates[index].campaign ? candidates[index].campaign : '--'}</td>
                <td>${candidates[index].position ? candidates[index].position : '--'}</td>
                <td>${candidates[index].post ? candidates[index].post : '--'}</td>
                <td>${candidates[index].round ? candidates[index].round : '--'}</td>
                <td>
                    ${starIconGenerateByRate(candidates[index].rate ? candidates[index].rate : 0)}
                </td>
                <td>${candidates[index].createdAt}</td>
                <td>${candidates[index].level ? candidates[index].level : '--'}</td>
                <td>${candidates[index].location ? candidates[index].location : '--'}</td>
                <td>${candidates[index].major ? candidates[index].major : '--'}</td>
                <td>${candidates[index].recentWorkplace ? candidates[index].recentWorkplace : '--'}</td>
                <td>${candidates[index].humanResource ? candidates[index].humanResource : '--'}</td>
                <td>${candidates[index].unitUsed ? candidates[index].unitUsed : '--'}</td>
                <td>${candidates[index].matchProfile ? candidates[index].matchProfile : '--'}</td>
                <td>${candidates[index].region ? candidates[index].region : '--'}</td>
                <td>${candidates[index].refferal ? candidates[index].refferal : '--'}</td>
                <td>${candidates[index].informationReceived ? candidates[index].informationReceived : '--'}</td>
                <td>${candidates[index].potentialStorage ? candidates[index].potentialStorage : '--'}</td>
                <td class="col-action">
                    <span class="icon-edit" onclick="openUpdateCandidateModal(${candidates[index].id})"></span>
                </td>
            </tr>
    `;
    }
    return true;
};
/**
 * Chuyển về trang trước đó trong bảng ứng viên.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function previousPage() {
    const previousPageBtn = document.getElementById("previous-page");
    const nextPageBtn = document.getElementById("next-page");
    // check if previous page is available
    if (currentPage > 0) {
        currentPage--;
        const pageSize = parseInt(document.getElementById("per-page-selection").value);
        paginagationCandidatesTable(candidatesPagination, currentPage, pageSize);
        if (currentPage == 0) {
            previousPageBtn.classList.add("disabled");
            nextPageBtn.classList.remove("disabled");
        }
    }
}
/**
 * Chuyển sang trang kế tiếp trong bảng ứng viên.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function nextPage() {
    const pageSize = parseInt(document.getElementById("per-page-selection").value);
    const previousPageBtn = document.getElementById("previous-page");
    // check if next page is available
    if ((currentPage + 1) * pageSize < candidatesPagination.length) {
        currentPage++;
        const isLastPage = paginagationCandidatesTable(candidatesPagination, currentPage, pageSize);
        if (!isLastPage) {
            const nextPageBtn = document.getElementById("next-page");
            nextPageBtn.classList.add("disabled");
        }
        previousPageBtn.classList.remove("disabled");
    }
}
/**
 * Đổi kích thước trang và reset về trang đầu tiên.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function changePageSize() {
    const candidates = fetchCandidatesLists();
    const pageSize = parseInt(document.getElementById("per-page-selection").value);

    // reset checkbox all selected
    const selectAllInput = document.getElementById('select-all-input');
    selectAllInput.checked = false;

    currentPage = 0;
    paginagationCandidatesTable(candidates, currentPage, pageSize);
    const previousPageBtn = document.getElementById("previous-page");
    const nextPageBtn = document.getElementById("next-page");
    previousPageBtn.classList.add("disabled");
    if (candidates.length <= pageSize) {
        nextPageBtn.classList.add("disabled");
    } else {
        nextPageBtn.classList.remove("disabled");
    }
}
// Pagination functions end

// Storage functions for candidates management

/**
 * Lưu ứng viên mới vào localStorage và cập nhật bảng hiển thị.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function saveCandidatesToStorage() {
    // validate data
    if (validateCandidateData()) {
        const allFieldElements = getAllFieldElements();

        // save to local storage
        const candidates = fetchCandidatesLists();

        const newCandidate = {
            id: candidates.length > 0 ? candidates.length + 1 : 1,
            fullname: allFieldElements.fullnameInput.value,
            birthdate: allFieldElements.birthdateInput.value,
            gender: allFieldElements.genderSelect.value,
            region: allFieldElements.regionSelect.value,
            phoneNumber: allFieldElements.phoneInput.value,
            email: allFieldElements.emailInput.value,
            address: allFieldElements.addressInput.value,
            level: allFieldElements.levelSelect.value,
            location: allFieldElements.locationSelect.value,
            major: allFieldElements.majorSelect.value,
            createdAt: allFieldElements.createdAtInput.value,
            humanResource: allFieldElements.humanResourceSelect.value,
            candidateResource: allFieldElements.candidateResourceSelect.value,
            partner: allFieldElements.partnerSelect.value,
            recentWorkplace: allFieldElements.recentWorkplaceInput.value,
            workplace: allFieldElements.workplaceInput.value,
            timeFromWorkplace: allFieldElements.timeFromWorkplaceInput.value,
            timeToWorkplace: allFieldElements.timeToWorkplaceInput.value,
            position: allFieldElements.positionInput.value,
            jobDescription: allFieldElements.jobDescriptionInput.value
        };

        candidates.unshift(newCandidate);
        // save to local storage
        localStorage.setItem("candidates", JSON.stringify(candidates));
        totalCandidatesCount(candidates);

        // update new candidate on table
        const candidatesTableBody = document.getElementById("candidate-table-body");
        candidatesTableBody.innerHTML =
            `
                <tr id="candidate-${newCandidate.id}">
                    <td>
                     <input type="checkbox" class="row-checkbox" onchange="changeToolbarCandidateWrapperWhenCheckboxChecked()"/>
                    </td>
                    <td>${newCandidate.phoneNumber ? newCandidate.phoneNumber : '--'}</td>
                    <td>${newCandidate.candidateResource ? newCandidate.candidateResource : '--'}</td>
                    <td>
                    <span class="avatar avatar-blue" style="background-color: ${stringToColor(autoGenerateAvatar(newCandidate.fullname))}">${autoGenerateAvatar(newCandidate.fullname ? newCandidate.fullname : '--')}</span>
                    <div class="name-block">
                        <div class="name">${newCandidate.fullname ? newCandidate.fullname : '--'}</div>
                        <div class="sub">--</div>
                    </div>
                    </td>
                    <td>${newCandidate.email ? newCandidate.email : '--'}</td>
                    <td>${newCandidate.campaign ? newCandidate.campaign : '--'}</td>
                    <td>${newCandidate.position ? newCandidate.position : '--'}</td>
                    <td>${newCandidate.post ? newCandidate.post : '--'}</td>
                    <td>${newCandidate.round ? newCandidate.round : '--'}</td>
                    <td>${newCandidate.rate ? newCandidate.rate : '--'}</td>
                    <td>${newCandidate.createdAt ? newCandidate.createdAt : '--'}</td>
                    <td>${newCandidate.level ? newCandidate.level : '--'}</td>
                    <td>${newCandidate.location ? newCandidate.location : '--'}</td>
                    <td>${newCandidate.major ? newCandidate.major : '--'}</td>
                    <td>${newCandidate.recentWorkplace ? newCandidate.recentWorkplace : '--'}</td>
                    <td>${newCandidate.humanResource ? newCandidate.humanResource : '--'}</td>
                    <td>${newCandidate.unitUsed ? newCandidate.unitUsed : '--'}</td>
                    <td>${newCandidate.matchProfile ? newCandidate.matchProfile : '--'}</td>
                    <td>${newCandidate.region ? newCandidate.region : '--'}</td>
                    <td>${newCandidate.refferal ? newCandidate.refferal : '--'}</td>
                    <td>${newCandidate.informationReceived ? newCandidate.informationReceived : '--'}</td>
                    <td>${newCandidate.potentialStorage ? newCandidate.potentialStorage : '--'}</td>
                    <td class="col-action">
                        <span class="icon-edit" onclick="openUpdateCandidateModal(${newCandidate.id})"></span>
                    </td>
                </tr>
            `
            + candidatesTableBody.innerHTML
            ;

        // reset modal
        resetAllFieldValues();
        closeModal();
        window.Toast?.show?.({ type: "success", message: "Thêm ứng viên thành công" });
    }

}

/**
 * Cập nhật thông tin ứng viên trong localStorage và bảng.
 * @param {number} id - Mã ứng viên cần cập nhật.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function updateCandidateInStorage(id) {
    if (!validateCandidateDataUpdateModal()) return;
    const allFieldElements = getAllFieldElementsUpdate();
    const candidates = fetchCandidatesLists();
    candidates.find((candidate) => {
        if (candidate.id === id) {
            candidate.fullname = allFieldElements.fullnameInput.value,
                candidate.birthdate = allFieldElements.birthdateInput.value,
                candidate.gender = allFieldElements.genderSelect.value,
                candidate.region = allFieldElements.regionSelect.value,
                candidate.phoneNumber = allFieldElements.phoneInput.value,
                candidate.email = allFieldElements.emailInput.value,
                candidate.address = allFieldElements.addressInput.value,
                candidate.level = allFieldElements.levelSelect.value,
                candidate.location = allFieldElements.locationSelect.value,
                candidate.major = allFieldElements.majorSelect.value,
                candidate.createdAt = allFieldElements.createdAtInput.value,
                candidate.humanResource = allFieldElements.humanResourceSelect.value,
                candidate.candidateResource = allFieldElements.candidateResourceSelect.value,
                candidate.partner = allFieldElements.partnerSelect.value,
                candidate.recentWorkplace = allFieldElements.recentWorkplaceInput.value,
                candidate.workplace = allFieldElements.workplaceInput.value,
                candidate.timeFromWorkplace = allFieldElements.timeFromWorkplaceInput.value,
                candidate.timeToWorkplace = allFieldElements.timeToWorkplaceInput.value,
                candidate.position = allFieldElements.positionInput.value,
                candidate.jobDescription = allFieldElements.jobDescriptionInput.value
            candidate.skypeName = allFieldElements.skypeNameInput.value,
                candidate.skypeId = allFieldElements.skypeIdInput.value,
                candidate.linkFacebook = allFieldElements.linkFacebookInput.value,
                candidate.linkZalo = allFieldElements.linkZaloInput.value,
                candidate.otherLink = allFieldElements.otherLinkInput.value
        }
    });
    // save to local storage
    localStorage.setItem("candidates", JSON.stringify(candidates));
    window.Toast?.show?.({ type: "success", message: "Sửa ứng viên thành công" });

    // update candidate on table
    const candidateRow = document.getElementById(`candidate-${id}`);
    const candidate = candidates.find((candidate) => candidate.id === id);
    candidateRow.innerHTML =
        `
            <td>
            <input type="checkbox" class="row-checkbox" />
            </td>
            <td>${candidate.phoneNumber ? candidate.phoneNumber : '--'}</td>
            <td>${candidate.candidateResource ? candidate.candidateResource : '--'}</td>
            <td>
            <span class="avatar avatar-blue" style="background-color: ${stringToColor(autoGenerateAvatar(candidate.fullname))}">${autoGenerateAvatar(candidate.fullname ? candidate.fullname : '--')}</span>
            <div class="name-block">
                <div class="name">${candidate.fullname ? candidate.fullname : '--'}</div>
                <div class="sub">--</div>
            </div>
            </td>
            <td>${candidate.email ? candidate.email : '--'}</td>
            <td>${candidate.campaign ? candidate.campaign : '--'}</td>
            <td>${candidate.position ? candidate.position : '--'}</td>
            <td>${candidate.post ? candidate.post : '--'}</td>
            <td>${candidate.round ? candidate.round : '--'}</td>
            <td>${candidate.rate ? candidate.rate : '--'}</td>
            <td>${candidate.createdAt ? candidate.createdAt : '--'}</td>
            <td>${candidate.level ? candidate.level : '--'}</td>
            <td>${candidate.location ? candidate.location : '--'}</td>
            <td>${candidate.major ? candidate.major : '--'}</td>
            <td>${candidate.recentWorkplace ? candidate.recentWorkplace : '--'}</td>
            <td>${candidate.humanResource ? candidate.humanResource : '--'}</td>
            <td>${candidate.unitUsed ? candidate.unitUsed : '--'}</td>
            <td>${candidate.matchProfile ? candidate.matchProfile : '--'}</td>
            <td>${candidate.region ? candidate.region : '--'}</td>
            <td>${candidate.refferal ? candidate.refferal : '--'}</td>
            <td>${candidate.informationReceived ? candidate.informationReceived : '--'}</td>
            <td>${candidate.potentialStorage ? candidate.potentialStorage : '--'}</td>
            <td class="col-action">
                <span class="icon-edit" onclick="openUpdateCandidateModal(${candidate.id})"></span>
            </td>
        `;
    // reset modal
    resetAllFieldValuesUpdate();
    closeModal();


}

/**
 * Tìm kiếm ứng viên theo họ tên, email hoặc số điện thoại.
 * @param {string} keyword - Từ khóa tìm kiếm không phân biệt hoa thường.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function findCandidateByFullNameEmailPhone(keyword) {
    const candidates = fetchCandidatesLists();
    const lowerCaseKeyword = keyword.toLowerCase();
    // re-render table with filtered candidates
    paginagationCandidatesTable(
        candidates.filter(candidate =>
            (candidate.fullname && candidate.fullname.toLowerCase().includes(lowerCaseKeyword)) ||
            (candidate.email && candidate.email.toLowerCase().includes(lowerCaseKeyword)) ||
            (candidate.phoneNumber && candidate.phoneNumber.toLowerCase().includes(lowerCaseKeyword))
        ), 0);
}