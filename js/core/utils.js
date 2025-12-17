// Constants for date time formats
const dateTimeText = {
    "ddMMyyyy": "Ngày tháng năm",
    "MMyyyy": "Tháng năm",
    "yyyy": "Năm"
}
/**
 * Chuyển chuỗi dd/MM/yyyy thành Date; trả về null nếu không hợp lệ.
 * @param {string} str - Chuỗi ngày dd/MM/yyyy.
 * @returns {Date|null} - Đối tượng Date hoặc null.
 * Created By hanv 16/12/2025
 */
function parseDDMMYYYY(str) {
    const [d, m, y] = str.split('/').map(Number);
    const date = new Date(y, m - 1, d);

    if (
        date.getFullYear() !== y ||
        date.getMonth() !== m - 1 ||
        date.getDate() !== d
    ) {
        return null;
    }
    return date;
}
/**
 * Chuyển chuỗi MM/yyyy thành Date đầu tháng; trả về null nếu không hợp lệ.
 * @param {string} str - Chuỗi tháng năm MM/yyyy.
 * @returns {Date|null} - Đối tượng Date hoặc null.
 * Created By hanv 16/12/2025
 */
function parseMMYYYY(str) {
    const [m, y] = str.split('/').map(Number);
    const date = new Date(y, m - 1, 1);
    if (
        date.getFullYear() !== y ||
        date.getMonth() !== m - 1
    ) {
        return null;
    }
    return date;
}
/**
 * Trả về số ngày của tháng bất kỳ.
 * @param {number} month - Tháng (1-12).
 * @param {number} year - Năm đầy đủ.
 * @returns {number} - Số ngày trong tháng.
 * Created By hanv 16/12/2025
 */
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
/**
 * Định dạng input ngày theo kiểu đang chọn (dd/MM/yyyy, MM/yyyy, yyyy) khi nhập.
 * @param {HTMLInputElement} e - Input ngày.
 * @param {string} [action='add'] - Chế độ add hoặc update.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function formatInputTypeOnInput(e, action = 'add') {
    let dropdownText = document.getElementById(action === 'add' ? "dropdown-text-datetime" : "dropdown-text-datetime-update");

    const selectedType = dropdownText.textContent.trim().toLowerCase();
    const selectedDdMMyyyy = dateTimeText.ddMMyyyy.toLowerCase();
    const selectedMMyyyy = dateTimeText.MMyyyy.toLowerCase();
    const selectedYyyy = dateTimeText.yyyy.toLowerCase();

    let value = e.value.replace(/\D/g, '');

    if (selectedType === selectedDdMMyyyy) {
        formatInputTypeOnInputDayMonthYear(e);
        action === 'add ' ? validateCandidateData() : validateCandidateDataUpdate();
        return;
    }
    if (selectedType === selectedMMyyyy) {
        formatInputTypeOnInputMonthYear(e);
        action === 'add' ? validateCandidateData() : validateCandidateDataUpdate();
        return;
    }
    if (selectedType === selectedYyyy) {
        value = value.slice(0, 4);
        // year validation
        if (value.length >= 4) {
            if (value.slice(0, 4) < 1900) value = '1900';
        }
        e.value = value;
    }
    action === 'add' ? validateCandidateData() : validateCandidateDataUpdate();
}
/**
 * Xóa giá trị nếu không đúng định dạng đã chọn khi blur.
 * @param {HTMLInputElement} e - Input ngày.
 * @param {string} [action='add'] - Chế độ add hoặc update.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function formatInputTypeOnBlur(e, action = 'add') {
    let dropdownText = document.getElementById(action === 'add' ? "dropdown-text-datetime" : "dropdown-text-datetime-update");

    const selectedType = dropdownText.textContent.trim().toLowerCase();
    const selectedDdMMyyyy = dateTimeText.ddMMyyyy.toLowerCase();
    const selectedMMyyyy = dateTimeText.MMyyyy.toLowerCase();
    const selectedYyyy = dateTimeText.yyyy.toLowerCase();
    let value = e.value;
    if (selectedType === selectedDdMMyyyy) {
        formatInputTypeOnBlurDayMonthYear(e);
        return;
    }
    if (selectedType === selectedMMyyyy) {
        formatInputTypeOnBlurMonthYear(e);
        return;
    }
    if (selectedType === selectedYyyy) {
        if (value.length !== 4) {
            e.value = '';
        }
    }
}
/**
 * Định dạng và ràng buộc giá trị MM/yyyy khi nhập.
 * @param {HTMLInputElement} e - Input tháng/năm.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function formatInputTypeOnInputMonthYear(e) {
    let value = e.value.replace(/\D/g, '');
    // month validation
    if (value.length > 2) {
        if (value.slice(0, 2) > 12) value = '12' + value.slice(2);
        if (value.slice(0, 2) < 1) value = '01' + value.slice(2);
        value = value.slice(0, 2) + '/' + value.slice(2, 6);
    }
    // year validation
    if (value.length >= 7) {
        if (value.slice(3, 7) < 1900) value = value.slice(0, 3) + '1900';
    }

    e.value = value;
}
/**
 * Xóa giá trị nếu không đúng MM/yyyy khi blur.
 * @param {HTMLInputElement} e - Input tháng/năm.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function formatInputTypeOnBlurMonthYear(e) {
    if (e.value.length !== 7) {
        e.value = '';
    }
}
/**
 * Định dạng và ràng buộc giá trị dd/MM/yyyy khi nhập.
 * @param {HTMLInputElement} e - Input ngày/tháng/năm.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function formatInputTypeOnInputDayMonthYear(e) {
    let value = e.value.replace(/\D/g, '');
    // day validation
    if (value.length > 2) {
        if (value.slice(0, 2) > 31) value = '31' + value.slice(2);
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    // month validation
    if (value.length > 3) {
        if (value.slice(3, 5) > 12) value = value.slice(0, 3) + '12' + value.slice(5);
    }
    if (value.length > 4) {
        if (value.slice(3, 5) < 1) value = value.slice(0, 3) + '01' + value.slice(5);
    }
    // year validation
    if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5, 9);
    if (value.length >= 10) {
        if (value.slice(6, 10) < 1900) value = value.slice(0, 6) + '1900';
        if (value.slice(0, 2) > getDaysInMonth(parseInt(value.slice(3, 5)), parseInt(value.slice(6, 10)))) {
            value = getDaysInMonth(parseInt(value.slice(3, 5)), parseInt(value.slice(6, 10))) + value.slice(2)
        }
    }

    e.value = value;
}
/**
 * Xóa giá trị nếu không đúng dd/MM/yyyy khi blur.
 * @param {HTMLInputElement} e - Input ngày/tháng/năm.
 * @returns {void}
 * Created By hanv 16/12/2025
 */
function formatInputTypeOnBlurDayMonthYear(e) {
    if (e.value.length !== 10) {
        e.value = '';
    }
}
/**
 * Sinh màu HSL ổn định từ chuỗi.
 * @param {string} str - Chuỗi đầu vào.
 * @returns {string} - Giá trị màu hsl().
 * Created By hanv 16/12/2025
 */
function stringToColor(str) {
    let hash = 0;
    for (let index = 0; index < str.length; index++) {
        hash = str.charCodeAt(index) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 50%)`;
}
/**
 * Tạo avatar chữ cái đầu từ họ tên.
 * @param {string} fullname - Họ tên đầy đủ.
 * @returns {string} - Hai ký tự viết hoa đại diện.
 * Created By hanv 16/12/2025
 */
function autoGenerateAvatar(fullname) {
    const names = fullname.trim().split(" ");

    let avatar = "";
    if (names.length === 1) {
        avatar = names[0].charAt(0).toUpperCase();
    } else {
        avatar = names[0].charAt(0).toUpperCase() + names[names.length - 1].charAt(0).toUpperCase();
    }
    return avatar;
}