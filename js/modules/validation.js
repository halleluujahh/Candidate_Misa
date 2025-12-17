/**
 * Xóa toàn bộ thông báo lỗi và class lỗi trên form.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function removeErrorMessages() {
    const allFieldElements = getAllFieldElements();
    const allFieldElementsUpdate = getAllFieldElementsUpdate();
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => {
        message.textContent = "";
        message.classList.remove("d-block");
        message.classList.add("d-none");
    });

    allFieldElements.fullnameInput.classList.remove("input-error");
    allFieldElements.birthdateInput.classList.remove("input-error");
    allFieldElements.genderSelect.classList.remove("input-error");
    allFieldElements.regionSelect.classList.remove("input-error");
    allFieldElements.phoneInput.classList.remove("input-error");
    allFieldElements.emailInput.classList.remove("input-error");
    allFieldElements.addressInput.classList.remove("input-error");
    allFieldElements.levelSelect.classList.remove("input-error");
    allFieldElements.locationSelect.classList.remove("input-error");
    allFieldElements.majorSelect.classList.remove("input-error");
    allFieldElements.createdAtInput.classList.remove("input-error");
    allFieldElements.humanResourceSelect.classList.remove("input-error");
    allFieldElements.candidateResourceSelect.classList.remove("input-error");
    allFieldElements.partnerSelect.classList.remove("input-error");
    allFieldElements.recentWorkplaceInput.classList.remove("input-error");
    allFieldElements.workplaceInput.classList.remove("input-error");
    allFieldElements.timeFromWorkplaceInput.classList.remove("input-error");
    allFieldElements.timeToWorkplaceInput.classList.remove("input-error");
    allFieldElements.positionInput.classList.remove("input-error");
    allFieldElements.jobDescriptionInput.classList.remove("input-error");

    allFieldElementsUpdate.fullnameInput.classList.remove("input-error");
    allFieldElementsUpdate.birthdateInput.classList.remove("input-error");
    allFieldElementsUpdate.genderSelect.classList.remove("input-error");
    allFieldElementsUpdate.regionSelect.classList.remove("input-error");
    allFieldElementsUpdate.phoneInput.classList.remove("input-error");
    allFieldElementsUpdate.emailInput.classList.remove("input-error");
    allFieldElementsUpdate.addressInput.classList.remove("input-error");
    allFieldElementsUpdate.levelSelect.classList.remove("input-error");
    allFieldElementsUpdate.locationSelect.classList.remove("input-error");
    allFieldElementsUpdate.majorSelect.classList.remove("input-error");
    allFieldElementsUpdate.createdAtInput.classList.remove("input-error");
    allFieldElementsUpdate.humanResourceSelect.classList.remove("input-error");
    allFieldElementsUpdate.candidateResourceSelect.classList.remove("input-error");
    allFieldElementsUpdate.partnerSelect.classList.remove("input-error");
    allFieldElementsUpdate.recentWorkplaceInput.classList.remove("input-error");
    allFieldElementsUpdate.workplaceInput.classList.remove("input-error");
    allFieldElementsUpdate.timeFromWorkplaceInput.classList.remove("input-error");
    allFieldElementsUpdate.timeToWorkplaceInput.classList.remove("input-error");
    allFieldElementsUpdate.positionInput.classList.remove("input-error");
    allFieldElementsUpdate.jobDescriptionInput.classList.remove("input-error");
}
/**
 * Kiểm tra dữ liệu hợp lệ cho modal thêm ứng viên.
 * @returns {boolean} - true nếu hợp lệ, ngược lại false.
 * Created By hanv 16/12/2025
 */
function validateCandidateData() {
    const allFieldElements = getAllFieldElements();

    // error message elements
    const fullnameErrorMessage = document.getElementById("fullname-error-message");
    const birthdateErrorMessage = document.getElementById("birthdate-error-message");
    const phoneErrorMessage = document.getElementById("phone-error-message");
    const emailErrorMessage = document.getElementById("email-error-message");
    const timeToErrorMessage = document.getElementById("time-to-error-message");
    // validation fields
    if (allFieldElements.fullnameInput.value.trim() === "") {
        fullnameErrorMessage.textContent = "Không được để trống";
        allFieldElements.fullnameInput.classList.add("input-error");
        fullnameErrorMessage.classList.remove("d-none");
        fullnameErrorMessage.classList.add("d-block");
        return false;
    }
    removeErrorMessages();
    if (allFieldElements.birthdateInput.value.trim() !== "") {
        if (parseDDMMYYYY(allFieldElements.birthdateInput.value) >= new Date()) {
            birthdateErrorMessage.textContent = "Ngày sinh phải nhỏ hơn ngày hiện tại";
            allFieldElements.birthdateInput.classList.add("input-error");
            birthdateErrorMessage.classList.remove("d-none");
            birthdateErrorMessage.classList.add("d-block");
            return false;
        }
    }
    removeErrorMessages();
    if (allFieldElements.phoneInput.value.trim() !== "") {
        const phonePattern = /^(0|\+84)[0-9]{9}$/;
        if (!phonePattern.test(allFieldElements.phoneInput.value.trim())) {
            phoneErrorMessage.textContent = "Số điện thoại sai định dạng";
            allFieldElements.phoneInput.classList.add("input-error");
            phoneErrorMessage.classList.remove("d-none");
            phoneErrorMessage.classList.add("d-block");
            return false;
        }
    }
    removeErrorMessages();
    if (allFieldElements.emailInput.value.trim() !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(allFieldElements.emailInput.value.trim())) {
            emailErrorMessage.textContent = "Email sai định dạng";
            allFieldElements.emailInput.classList.add("input-error");
            emailErrorMessage.classList.remove("d-none");
            emailErrorMessage.classList.add("d-block");
            return false;
        }
    }
    removeErrorMessages();
    if (allFieldElements.timeFromWorkplaceInput.value.trim() == "" && allFieldElements.timeToWorkplaceInput.value.trim() != "") {
        allFieldElements.timeToWorkplaceInput.classList.add("input-error");
        return false;
    }
    if (allFieldElements.timeFromWorkplaceInput.value.trim() !== "" && allFieldElements.timeToWorkplaceInput.value.trim() == "") {
        timeToErrorMessage.textContent = "Thời gian không hợp lệ";
        allFieldElements.timeToWorkplaceInput.classList.add("input-error");
        return false;
    }
    removeErrorMessages();
    if (allFieldElements.timeFromWorkplaceInput.value.trim() !== "" && allFieldElements.timeToWorkplaceInput.value.trim() !== "") {
        if (parseMMYYYY(allFieldElements.timeFromWorkplaceInput.value) > parseMMYYYY(allFieldElements.timeToWorkplaceInput.value)) {
            timeToErrorMessage.textContent = "Thời gian không hợp lệ";
            allFieldElements.timeToWorkplaceInput.classList.add("input-error");
            timeToErrorMessage.classList.remove("d-none");
            timeToErrorMessage.classList.add("d-block");
            return false;
        }
    }
    removeErrorMessages();
    return true;
}
/**
 * Kiểm tra dữ liệu hợp lệ cho modal cập nhật ứng viên.
 * @returns {boolean} - true nếu hợp lệ, ngược lại false.
 * Created By hanv 16/12/2025
 */
function validateCandidateDataUpdateModal() {
    const allFieldElements = getAllFieldElementsUpdate();

    // error message elements
    const fullnameErrorMessage = document.getElementById("fullname-update-error-message");
    const birthdateErrorMessage = document.getElementById("birthdate-update-error-message");
    const phoneErrorMessage = document.getElementById("phone-update-error-message");
    const emailErrorMessage = document.getElementById("email-update-error-message");
    const timeToErrorMessage = document.getElementById("time-to-update-error-message");
    // validation fields
    if (allFieldElements.fullnameInput.value.trim() === "") {
        fullnameErrorMessage.textContent = "Không được để trống";
        allFieldElements.fullnameInput.classList.add("input-error");
        fullnameErrorMessage.classList.remove("d-none");
        fullnameErrorMessage.classList.add("d-block");
        return false;
    }
    removeErrorMessages();
    if (allFieldElements.birthdateInput.value.trim() !== "") {
        if (parseDDMMYYYY(allFieldElements.birthdateInput.value) >= new Date()) {
            birthdateErrorMessage.textContent = "Ngày sinh phải nhỏ hơn ngày hiện tại";
            allFieldElements.birthdateInput.classList.add("input-error");
            birthdateErrorMessage.classList.remove("d-none");
            birthdateErrorMessage.classList.add("d-block");
            return false;
        }
    }
    removeErrorMessages();
    if (allFieldElements.phoneInput.value.trim() !== "") {
        const phonePattern = /^(0|\+84)[0-9]{9}$/;
        if (!phonePattern.test(allFieldElements.phoneInput.value.trim())) {
            phoneErrorMessage.textContent = "Số điện thoại sai định dạng";
            allFieldElements.phoneInput.classList.add("input-error");
            phoneErrorMessage.classList.remove("d-none");
            phoneErrorMessage.classList.add("d-block");
            return false;
        }
    }
    removeErrorMessages();
    if (allFieldElements.emailInput.value.trim() !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(allFieldElements.emailInput.value.trim())) {
            emailErrorMessage.textContent = "Email sai định dạng";
            allFieldElements.emailInput.classList.add("input-error");
            emailErrorMessage.classList.remove("d-none");
            emailErrorMessage.classList.add("d-block");
            return false;
        }
    }
    removeErrorMessages();
    return true;
}
