/**
 * Hiển thị hoặc ẩn nút xóa trong ô tìm kiếm.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function onInputChange() {
  const searchInput = document.getElementById("text-editor-input");
  const clearButton = document.getElementsByClassName("clear-button-area");
  if (searchInput.value.length > 0) {
    clearButton[0].style.display = "flex";
  } else {
    clearButton[0].style.display = "none";
  }
}
/**
 * Xóa nội dung ô tìm kiếm và ẩn nút xóa.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function clearSearchInput() {
  const searchInput = document.getElementById("text-editor-input");
  const clearButton = document.getElementsByClassName("clear-button-area");
  searchInput.value = "";
  clearButton[0].style.display = "none";
}
/**
 * Mở liên kết tuyển dụng trong tab mới.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function targetBlankRecruitmentLinks() {
  window.open("https://nhietdien.jobday.vn/", '_blank').focus();
}
/**
 * Thu gọn hoặc mở rộng sidebar và lưu trạng thái.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function collapseSidebar() {
  const sidebar = document.getElementById("sidebar");
  const iconLeft = document.getElementById("icon-left");
  const recruitmentContainer = document.getElementById("recruiment-app-content-container");
  const collapsedText = document.getElementById("collapsed-text");

  // Toggle classes for collapse/expand
  sidebar.classList.toggle("sidebar-collapse-mode");
  sidebar.classList.toggle("sidebar-expand-mode");
  iconLeft.classList.toggle("icon-right");
  iconLeft.classList.toggle("icon-left");
  recruitmentContainer.classList.toggle("recruiment-app-content-container-collapse");
  recruitmentContainer.classList.toggle("recruiment-app-content-container-expand");
  collapsedText.classList.toggle("collapsed-text-hidden");
  collapsedText.classList.toggle("collapsed-text-show");

  // Save sidebar state to local storage
  localStorage.setItem("isSidebarCollapsed", sidebar.classList.contains("sidebar-collapse-mode"));
}
/**
 * Khởi tạo trạng thái sidebar khi tải trang.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
(function initializeSidebarState() {
  localStorage.getItem("isSidebarCollapsed") === "true" ? collapseSidebar() : null;
})();

//Modal functions start here
/**
 * Mở/đóng dropdown chọn định dạng ngày tháng.
 * @param {string} [action='add'] - Chế độ add hoặc update.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function openDateTimeModal(action = 'add') {
  if (action == 'add') {
    const addCandidateModal = document.getElementById("display-datetime-modal");
    addCandidateModal.classList.toggle("datetime-dropdown-show");
    addCandidateModal.classList.toggle("datetime-dropdown-hide");
  } else {
    const updateCandidateModal = document.getElementById("display-datetime-modal-update");
    updateCandidateModal.classList.toggle("datetime-dropdown-show");
    updateCandidateModal.classList.toggle("datetime-dropdown-hide");
  }
}
/**
 * Đổi placeholder theo kiểu định dạng ngày được chọn.
 * @param {HTMLElement} e - Phần tử được chọn trong dropdown.
 * @param {string} [action='add'] - Chế độ add hoặc update.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function changeInputDateType(e, action = 'add') {
  let dropdownText, dateTimeInput;
  if (action == 'add') {
    dropdownText = document.getElementById("dropdown-text-datetime");
    dateTimeInput = document.getElementById("birthdate");
  } else {
    dropdownText = document.getElementById("dropdown-text-datetime-update");
    dateTimeInput = document.getElementById("birthdate-update");
  }

  if (e.id == "choosed-year") {
    dropdownText.textContent = dateTimeText.yyyy;
    dateTimeInput.setAttribute("placeholder", "yyyy");
  }
  if (e.id == "choosed-month-year") {
    dropdownText.textContent = dateTimeText.MMyyyy;
    dateTimeInput.setAttribute("placeholder", "MM/yyyy");
  }
  if (e.id == "choosed-day-month-year") {
    dropdownText.textContent = dateTimeText.ddMMyyyy;
    dateTimeInput.setAttribute("placeholder", "dd/MM/yyyy");
  }
}
/**
 * Lấy tất cả input/select của modal thêm ứng viên.
 * @returns {object} - Map các phần tử form.
 * Created By hanv 16/12/2025
 */
function getAllFieldElements() {
  const fullnameInput = document.getElementById("fullname");
  const birthdateInput = document.getElementById("birthdate");
  const genderSelect = document.getElementById("gender");
  const regionSelect = document.getElementById("region");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const addressInput = document.getElementById("address");
  const levelSelect = document.getElementById("level");
  const locationSelect = document.getElementById("location");
  const majorSelect = document.getElementById("major");
  const createdAtInput = document.getElementById("created-at");
  const humanResourceSelect = document.getElementById("human-resource");
  const candidateResourceSelect = document.getElementById("candidate-resource");
  const partnerSelect = document.getElementById("partner");
  const recentWorkplaceInput = document.getElementById("recent-workplace");
  const workplaceInput = document.getElementById("workplace");
  const timeFromWorkplaceInput = document.getElementById("time-from");
  const timeToWorkplaceInput = document.getElementById("time-to");
  const positionInput = document.getElementById("position");
  const jobDescriptionInput = document.getElementById("job-description");
  return {
    fullnameInput,
    birthdateInput,
    genderSelect,
    regionSelect,
    phoneInput,
    emailInput,
    addressInput,
    levelSelect,
    locationSelect,
    majorSelect,
    createdAtInput,
    humanResourceSelect,
    candidateResourceSelect,
    partnerSelect,
    recentWorkplaceInput,
    workplaceInput,
    timeFromWorkplaceInput,
    timeToWorkplaceInput,
    positionInput,
    jobDescriptionInput
  };
}
/**
 * Lấy tất cả input/select của modal cập nhật ứng viên.
 * @returns {object} - Map các phần tử form.
 * Created By hanv 16/12/2025
 */
function getAllFieldElementsUpdate() {
  const fullnameInput = document.getElementById("fullname-update");
  const birthdateInput = document.getElementById("birthdate-update");
  const genderSelect = document.getElementById("gender-update");
  const regionSelect = document.getElementById("region-update");
  const phoneInput = document.getElementById("phone-update");
  const emailInput = document.getElementById("email-update");
  const addressInput = document.getElementById("address-update");
  const levelSelect = document.getElementById("level-update");
  const locationSelect = document.getElementById("location-update");
  const majorSelect = document.getElementById("major-update");
  const createdAtInput = document.getElementById("created-at-update");
  const humanResourceSelect = document.getElementById("human-resource-update");
  const candidateResourceSelect = document.getElementById("candidate-resource-update");
  const partnerSelect = document.getElementById("partner-update");
  const recentWorkplaceInput = document.getElementById("recent-workplace-update");
  const workplaceInput = document.getElementById("workplace-update");
  const timeFromWorkplaceInput = document.getElementById("time-from-update");
  const timeToWorkplaceInput = document.getElementById("time-to-update");
  const positionInput = document.getElementById("position-update");
  const jobDescriptionInput = document.getElementById("job-description-update");
  const skypeNameInput = document.getElementById("skype-name");
  const skypeIdInput = document.getElementById("skype-id");
  const linkFacebookInput = document.getElementById("link-facebook");
  const linkZaloInput = document.getElementById("link-zalo");
  const otherLinkInput = document.getElementById("other-link");
  return {
    fullnameInput,
    birthdateInput,
    genderSelect,
    regionSelect,
    phoneInput,
    emailInput,
    addressInput,
    levelSelect,
    locationSelect,
    majorSelect,
    createdAtInput,
    humanResourceSelect,
    candidateResourceSelect,
    partnerSelect,
    recentWorkplaceInput,
    workplaceInput,
    timeFromWorkplaceInput,
    timeToWorkplaceInput,
    positionInput,
    jobDescriptionInput,
    skypeNameInput,
    skypeIdInput,
    linkFacebookInput,
    linkZaloInput,
    otherLinkInput
  };
}
/**
 * Reset toàn bộ giá trị trong modal thêm ứng viên.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function resetAllFieldValues() {
  const allFieldElements = getAllFieldElements();
  allFieldElements.fullnameInput.value = "";
  allFieldElements.birthdateInput.value = "";
  allFieldElements.genderSelect.value = "";
  allFieldElements.regionSelect.value = "";
  allFieldElements.phoneInput.value = "";
  allFieldElements.emailInput.value = "";
  allFieldElements.addressInput.value = "";
  allFieldElements.levelSelect.value = "";
  allFieldElements.locationSelect.value = "";
  allFieldElements.majorSelect.value = "";
  allFieldElements.createdAtInput.value = "";
  allFieldElements.humanResourceSelect.value = "";
  allFieldElements.candidateResourceSelect.value = "";
  allFieldElements.partnerSelect.value = "";
  allFieldElements.recentWorkplaceInput.value = "";
  allFieldElements.workplaceInput.value = "";
  allFieldElements.timeFromWorkplaceInput.value = "";
  allFieldElements.timeToWorkplaceInput.value = "";
  allFieldElements.positionInput.value = "";
  allFieldElements.jobDescriptionInput.value = "";

  removeErrorMessages();
}
/**
 * Reset toàn bộ giá trị trong modal cập nhật ứng viên.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function resetAllFieldValuesUpdate() {
  const allFieldElements = getAllFieldElementsUpdate();
  allFieldElements.fullnameInput.value = "";
  allFieldElements.birthdateInput.value = "";
  allFieldElements.genderSelect.value = "";
  allFieldElements.regionSelect.value = "";
  allFieldElements.phoneInput.value = "";
  allFieldElements.emailInput.value = "";
  allFieldElements.addressInput.value = "";
  allFieldElements.levelSelect.value = "";
  allFieldElements.locationSelect.value = "";
  allFieldElements.majorSelect.value = "";
  allFieldElements.createdAtInput.value = "";
  allFieldElements.humanResourceSelect.value = "";
  allFieldElements.candidateResourceSelect.value = "";
  allFieldElements.partnerSelect.value = "";
  allFieldElements.recentWorkplaceInput.value = "";
  allFieldElements.workplaceInput.value = "";
  allFieldElements.timeFromWorkplaceInput.value = "";
  allFieldElements.timeToWorkplaceInput.value = "";
  allFieldElements.positionInput.value = "";
  allFieldElements.jobDescriptionInput.value = "";
}
/**
 * Mở modal thêm ứng viên và gán sự kiện lưu.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function openAddCandidateModal() {
  resetAllFieldValues();
  const saveBtn = document.getElementById("save-btn");
  const addCandidateModal = document.getElementById("add-candidate-modal");
  addCandidateModal.classList.toggle("overlay-modal-show");
  addCandidateModal.classList.toggle("overlay-modal-hide");
  saveBtn.setAttribute("onclick", "saveCandidatesToStorage()");
}
/**
 * Mở modal chỉnh sửa ứng viên và bind dữ liệu.
 * @param {number} id - Mã ứng viên cần chỉnh sửa.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function openUpdateCandidateModal(id) {
  const updateBtn = document.getElementById("update-btn");
  const updateCandidateModal = document.getElementById("update-candidate-modal");
  updateCandidateModal.classList.toggle("overlay-modal-show");
  updateCandidateModal.classList.toggle("overlay-modal-hide");

  const allFieldElements = getAllFieldElementsUpdate();
  const candidateList = fetchCandidatesLists();

  // fill in data
  candidateList.forEach(candidate => {
    if (candidate.id == id) {
      allFieldElements.fullnameInput.value = candidate.fullname ? candidate.fullname : '';
      allFieldElements.birthdateInput.value = candidate.birthdate ? candidate.birthdate : '';
      allFieldElements.genderSelect.value = candidate.gender ? candidate.gender : '';
      allFieldElements.regionSelect.value = candidate.region ? candidate.region : '';
      allFieldElements.phoneInput.value = candidate.phoneNumber ? candidate.phoneNumber : '';
      allFieldElements.emailInput.value = candidate.email ? candidate.email : '';
      allFieldElements.addressInput.value = candidate.address ? candidate.address : '';
      allFieldElements.levelSelect.value = candidate.level ? candidate.level : '';
      allFieldElements.locationSelect.value = candidate.location ? candidate.location : '';
      allFieldElements.majorSelect.value = candidate.major ? candidate.major : '';
      allFieldElements.createdAtInput.value = candidate.createdAt ? candidate.createdAt : '';
      allFieldElements.humanResourceSelect.value = candidate.humanResource ? candidate.humanResource : '';
      allFieldElements.candidateResourceSelect.value = candidate.candidateResource ? candidate.candidateResource : "";
      allFieldElements.partnerSelect.value = candidate.partner ? candidate.partner : '';
      allFieldElements.recentWorkplaceInput.value = candidate.recentWorkplace ? candidate.recentWorkplace : '';
      allFieldElements.workplaceInput.value = candidate.workplace ? candidate.workplace : '';
      allFieldElements.timeFromWorkplaceInput.value = candidate.timeFromWorkplace ? candidate.timeFromWorkplace : '';
      allFieldElements.timeToWorkplaceInput.value = candidate.timeToWorkplace ? candidate.timeToWorkplace : '';
      allFieldElements.positionInput.value = candidate.position ? candidate.position : '';
      allFieldElements.jobDescriptionInput.value = candidate.jobDescription ? candidate.jobDescription : '';
      allFieldElements.skypeNameInput.value = candidate.skypeName ? candidate.skypeName : '';
      allFieldElements.skypeIdInput.value = candidate.skypeId ? candidate.skypeId : '';
      allFieldElements.linkFacebookInput.value = candidate.linkFacebook ? candidate.linkFacebook : '';
      allFieldElements.linkZaloInput.value = candidate.linkZalo ? candidate.linkZalo : '';
      allFieldElements.otherLinkInput.value = candidate.otherLink ? candidate.otherLink : '';
      updateBtn.setAttribute("onclick", `updateCandidateInStorage(${id})`);
    }
  });
}
/**
 * Đóng cả hai modal thêm/cập nhật ứng viên.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function closeModal() {
  const closeAddCandidateModal = document.getElementById("add-candidate-modal");
  const closeUpdateCandidateModal = document.getElementById("update-candidate-modal");
  closeAddCandidateModal.classList.remove("overlay-modal-show");
  closeAddCandidateModal.classList.add("overlay-modal-hide");
  closeUpdateCandidateModal.classList.remove("overlay-modal-show");
  closeUpdateCandidateModal.classList.add("overlay-modal-hide");
}
/**
 * Tự động co giãn chiều cao textarea theo nội dung.
 * @param {HTMLElement} e - Textarea cần auto height.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function autoHeight(e) {
  e.style.height = e.scrollHeight + 'px';
  const textArea = document.getElementById(e.id);
  if (textArea.value == "" || textArea.value == null) {
    e.style.height = '0px';
  }
}
/**
 * Thêm cụm input học vấn mới.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function addEducation() {
  const educationInputCluster = document.getElementById("education-input-cluster");
  const educationInfo = document.getElementsByClassName("education-info");
  educationInputCluster.innerHTML += `
         <div class="education-info d-flex">
                            <div
                              class="d-flex justify-content-between align-items-center education-info-item"
                            >
                              <div class="label-input d-flex align-items-center">
                                <div class="icon-dot"></div>
                                <div class="label-input">Trình độ đào tạo</div>
                              </div>
                              <select
                                class="field-input"
                                type="text"
                              >
                                <option value="">Chọn trình độ đào tạo</option>
                                <option value="1">Group tuyển dụng</option>
                                <option value="2">Hội chợ việc làm</option>
                              </select>
                              <span class="icon-plus plus-input"></span>
                              <span class="icon-sub sub-input sub-input-hide" onclick="removeEducation(e)"></span>
                            </div>
                            <div
                              class="d-flex justify-content-between align-items-center education-info-item"
                            >
                              <div class="label-input d-flex align-items-center">
                                <div class="icon-dot"></div>
                                <div class="label-input">Nơi đào tạo</div>
                              </div>
                              <select
                                class="field-input"
                                type="text"
                              >
                                <option value="">Chọn nơi đào tạo</option>
                                <option value="1">Group tuyển dụng</option>
                                <option value="2">Hội chợ việc làm</option>
                              </select>
                              <span class="icon-plus plus-input"></span>
                            </div>
                            <div
                              class="d-flex justify-content-between align-items-center education-info-item"
                            >
                              <div class="label-input d-flex align-items-center">
                                <div class="icon-dot"></div>
                                <div class="label-input">Chuyên ngành</div>
                              </div>
                             <select
                                class="field-input"
                                type="text"
                              >
                                <option value="">Chọn chuyên ngành</option>
                                <option value="1">Group tuyển dụng</option>
                                <option value="2">Hội chợ việc làm</option>
                              </select>
                              <span class="icon-plus plus-input"></span>
                            </div>
                          </div>
    `;
  if (educationInfo.length > 1) {
    for (let i = 0; i < educationInfo.length; i++) {
      if (educationInfo[i].children[0].children[3].classList.contains("sub-input-show"))
        continue;
      educationInfo[i].children[0].children[3].classList.remove("sub-input-hide");
      educationInfo[i].children[0].children[3].classList.add("sub-input-show");
      educationInfo[i].children[0].children[3].addEventListener("click", removeEducation);
    }
  }
}
/**
 * Xóa cụm input học vấn.
 * @param {Event} e - Sự kiện click nút xóa.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function removeEducation(e) {
  e.target.parentElement.parentElement.remove();
  const educationInfo = document.getElementsByClassName("education-info");
  if (educationInfo.length <= 1) {
    educationInfo[0].children[0].children[3].classList.remove("sub-input-show");
    educationInfo[0].children[0].children[3].classList.add("sub-input-hide");
  }
}
/**
 * Sinh chuỗi icon sao theo xếp hạng.
 * @param {string} rate - Hạng A-F.
 * @returns {string} - HTML icon sao.
 * Created By hanv 16/12/2025
 */
function starIconGenerateByRate(rate) {
  let starIcons = '';
  const greyStarIcon = '<span class="icon-avatar-grey"></span>';
  const yellowStarIcon = '<span class="icon-avatar-yellow"></span>';
  switch (rate) {
    case 'A':
      starIcons = yellowStarIcon.repeat(5);
      break;
    case 'B':
      starIcons = yellowStarIcon.repeat(4) + greyStarIcon;
      break;
    case 'C':
      starIcons = yellowStarIcon.repeat(3) + greyStarIcon.repeat(2);
      break;
    case 'D':
      starIcons = yellowStarIcon.repeat(2) + greyStarIcon.repeat(3);
      break;
    case 'E':
      starIcons = yellowStarIcon + greyStarIcon.repeat(4);
      break;
    case 'F':
      starIcons = greyStarIcon.repeat(5);
      break;
    default:
      starIcons = greyStarIcon.repeat(5);
  }
  return starIcons;
}
/**
 * Chọn/bỏ chọn tất cả checkbox ứng viên.
 * @param {HTMLInputElement} e - Checkbox chọn tất cả.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function checkboxSelectAllCandidateToggle(e) {
  const allCheckboxesRowCandidate = document.getElementsByClassName('row-checkbox');
  const toolbarGrid = document.getElementById('toolbar-grid');

  if (e.checked == true) {
    for (let i = 0; i < allCheckboxesRowCandidate.length; i++) {
      allCheckboxesRowCandidate[i].checked = true;
      toolbarGrid.innerHTML =
        `<div class="d-flex align-items-center">
        <div class="count-selected">
                            <span style="font-size: 14px;
                              font-weight: 600;">${allCheckboxesRowCandidate.length}</span> <span style="margin-left: 4px;font-size: 14px">đang chọn</span>
                            <span class="unselected-btn pointer" style="margin-left: 4px;margin-right: 4px;font-size: 14px;color:#2580eb" onClick="uncheckAllCandidateCheckboxes()">Bỏ chọn</span>
                          </div>
                          <div
                            class="action-toolbar-container d-flex dis-flex-grow dis-align-self-center pos-relative dis-flex-grow"
                          >
                            <div
                              class="action-toolbar-list d-flex dis-flex-grow"
                            >
                              <div class="action-toolbar-item d-flex flex-col">
                                <div
                                  class="btn btn-toolbar-grid d-flex dis-flex-row align-items-center"
                                >
                                  <div class="btn-icon icon-email"></div>
                                  <div class="btn-text">Gửi email</div>
                                </div>
                              </div>
                              <div class="action-toolbar-item d-flex flex-col">
                                <div
                                  class="btn btn-toolbar-grid d-flex dis-flex-row align-items-center"
                                >
                                  <div class="btn-icon icon-tag"></div>
                                  <div class="btn-text">Quản lý thẻ</div>
                                </div>
                              </div>
                              <div class="action-toolbar-item d-flex flex-col">
                                <div
                                  class="btn btn-toolbar-grid d-flex dis-flex-row align-items-center"
                                >
                                  <div class="btn-icon icon-task"></div>
                                  <div class="btn-text">Tạo công việc</div>
                                </div>
                              </div>
                              <div class="action-toolbar-item d-flex flex-col">
                                <div
                                  class="btn btn-toolbar-grid d-flex dis-flex-row align-items-center"
                                >
                                  <div class="btn-icon icon-delete"></div>
                                  <div class="btn-text">Xóa ứng viên</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>`;
    }
  } else {
    for (let i = 0; i < allCheckboxesRowCandidate.length; i++) {
      allCheckboxesRowCandidate[i].checked = false;
      toolbarGrid.innerHTML = `
      <div class="toolbar-grid-left">
        <div class="search-grid d-flex">
          <div class="search-ontab">
            <div class="texteditor-container">
              <div class="button-container">
                <div class="ai-search">
                  <div class="button-content">
                    <i class="search"></i>
                  </div>
                </div>
              </div>
              <div class="input-container">
                <input
                  class="text-editor-input"
                  type="search"
                  placeholder="Tìm kiếm hoặc nhờ AI trợ giúp"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="toolbar-grid-right">
        <div
          class="filter-area wrap-icon-button-toolbar m-r-8"
          title="Bộ lọc"
        >
          <div class="icon-filter ic-svg"></div>
        </div>
        <div
          class="wrap-icon-button-toolbar m-r-8"
          title="Xuất khẩu"
        >
          <div class="icon-export ic-svg"></div>
        </div>
        <div
          class="wrap-icon-button-toolbar m-r-8"
          title="Xem nhanh hoạt động"
        >
          <div
            class="icon-interactive-history ic-svg"
          ></div>
        </div>
        <div class="z-index-default dropdown">
          <div class="wrap-icon-button-setting">
            <div class="icon-setting ic-svg"></div>
          </div>
        </div>
      </div>
      `;
    }
  }
}
/**
 * Bỏ chọn toàn bộ checkbox ứng viên.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function uncheckAllCandidateCheckboxes() {
  const allCheckboxesRowCandidate = document.getElementsByClassName('row-checkbox');
  const selectAllInput = document.getElementById('select-all-input');
  const toolbarGrid = document.getElementById('toolbar-grid');
  selectAllInput.checked = false;
  for (let i = 0; i < allCheckboxesRowCandidate.length; i++) {
    allCheckboxesRowCandidate[i].checked = false;
    toolbarGrid.innerHTML = `
      <div class="toolbar-grid-left">
        <div class="search-grid d-flex">
          <div class="search-ontab">
            <div class="texteditor-container">
              <div class="button-container">
                <div class="ai-search">
                  <div class="button-content">
                    <i class="search"></i>
                  </div>
                </div>
              </div>
              <div class="input-container">
                <input
                  class="text-editor-input"
                  type="search"
                  placeholder="Tìm kiếm hoặc nhờ AI trợ giúp"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="toolbar-grid-right">
        <div
          class="filter-area wrap-icon-button-toolbar m-r-8"
          title="Bộ lọc"
        >
          <div class="icon-filter ic-svg"></div>
        </div>
        <div
          class="wrap-icon-button-toolbar m-r-8"
          title="Xuất khẩu"
        >
          <div class="icon-export ic-svg"></div>
        </div>
        <div
          class="wrap-icon-button-toolbar m-r-8"
          title="Xem nhanh hoạt động"
        >
          <div
            class="icon-interactive-history ic-svg"
          ></div>
        </div>
        <div class="z-index-default dropdown">
          <div class="wrap-icon-button-setting">
            <div class="icon-setting ic-svg"></div>
          </div>
        </div>
      </div>
      `;
  }
}
/**
 * Kiểm tra có checkbox ứng viên nào được chọn.
 * @returns {boolean} - true nếu có ít nhất một checkbox.
 * Created By hanv 16/12/2025
 */
function isCheckedAnyCandidateCheckbox() {
  const allCheckboxesRowCandidate = document.getElementsByClassName('row-checkbox');
  for (let i = 0; i < allCheckboxesRowCandidate.length; i++) {
    if (allCheckboxesRowCandidate[i].checked == true) {
      return true;
    }
  }
  return false;
}
/**
 * Đếm số checkbox ứng viên được chọn.
 * @returns {number} - Số lượng checkbox được chọn.
 * Created By hanv 16/12/2025
 */
function countCheckedCandidateCheckboxes() {
  const allCheckboxesRowCandidate = document.getElementsByClassName('row-checkbox');
  let count = 0;
  for (let i = 0; i < allCheckboxesRowCandidate.length; i++) {
    if (allCheckboxesRowCandidate[i].checked == true) {
      count++;
    }
  }
  return count;
}
/**
 * Cập nhật thanh toolbar khi thay đổi trạng thái checkbox ứng viên.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function changeToolbarCandidateWrapperWhenCheckboxChecked() {
  const toolbarGrid = document.getElementById('toolbar-grid');
  if (isCheckedAnyCandidateCheckbox()) {
    toolbarGrid.innerHTML =
      `<div class="d-flex align-items-center">
        <div class="count-selected">
                           <span id="count-text" style="font-size: 14px;
                              font-weight: 600;">${countCheckedCandidateCheckboxes()}</span> <span style="margin-left: 4px;font-size: 14px">đang chọn</span>
                            <span class="unselected-btn pointer" style="margin-left: 4px;margin-right: 4px;font-size: 14px;color:#2580eb" onClick="uncheckAllCandidateCheckboxes()">Bỏ chọn</span>
                          </div>
                          <div
                            class="action-toolbar-container d-flex dis-flex-grow dis-align-self-center pos-relative dis-flex-grow"
                          >
                            <div
                              class="action-toolbar-list d-flex dis-flex-grow"
                            >
                              <div class="action-toolbar-item d-flex flex-col">
                                <div
                                  class="btn btn-toolbar-grid d-flex dis-flex-row align-items-center"
                                >
                                  <div class="btn-icon icon-email"></div>
                                  <div class="btn-text">Gửi email</div>
                                </div>
                              </div>
                              <div class="action-toolbar-item d-flex flex-col">
                                <div
                                  class="btn btn-toolbar-grid d-flex dis-flex-row align-items-center"
                                >
                                  <div class="btn-icon icon-tag"></div>
                                  <div class="btn-text">Quản lý thẻ</div>
                                </div>
                              </div>
                              <div class="action-toolbar-item d-flex flex-col">
                                <div
                                  class="btn btn-toolbar-grid d-flex dis-flex-row align-items-center"
                                >
                                  <div class="btn-icon icon-task"></div>
                                  <div class="btn-text">Tạo công việc</div>
                                </div>
                              </div>
                              <div class="action-toolbar-item d-flex flex-col">
                                <div
                                  class="btn btn-toolbar-grid d-flex dis-flex-row align-items-center"
                                >
                                  <div class="btn-icon icon-delete"></div>
                                  <div class="btn-text">Xóa ứng viên</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>`;
  } else {
    toolbarGrid.innerHTML = `
      <div class="toolbar-grid-left">
        <div class="search-grid d-flex">
          <div class="search-ontab">
            <div class="texteditor-container">
              <div class="button-container">
                <div class="ai-search">
                  <div class="button-content">
                    <i class="search"></i>
                  </div>
                </div>
              </div>
              <div class="input-container">
                <input
                  class="text-editor-input"
                  type="search"
                  placeholder="Tìm kiếm hoặc nhờ AI trợ giúp"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="toolbar-grid-right">
        <div
          class="filter-area wrap-icon-button-toolbar m-r-8"
          title="Bộ lọc"
        >
          <div class="icon-filter ic-svg"></div>
        </div>
        <div
          class="wrap-icon-button-toolbar m-r-8"
          title="Xuất khẩu"
        >
          <div class="icon-export ic-svg"></div>
        </div>
        <div
          class="wrap-icon-button-toolbar m-r-8"
          title="Xem nhanh hoạt động"
        >
          <div
            class="icon-interactive-history ic-svg"
          ></div>
        </div>
        <div class="z-index-default dropdown">
          <div class="wrap-icon-button-setting">
            <div class="icon-setting ic-svg"></div>
          </div>
        </div>
      </div>
    `
  }
}