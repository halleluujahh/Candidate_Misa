/**
 * Tải và parse file JSON từ đường dẫn.
 * @param {string} path - Đường dẫn tới file JSON.
 * @returns {Promise<any>} - Nội dung JSON đã parse.
 * Created By hanv 16/12/2025
 */
async function loadJSON(path) {
    let response = await fetch(path);
    return await response.json();
}
        
/**
 * Khởi tạo dữ liệu ứng viên vào localStorage khi tải trang.
 * @returns {Promise<void>}
 * Created By hanv 16/12/2025
 */
(async function seedData() {
    const candidateList = await loadJSON("../assets/json/candidates.json");
    localStorage.setItem("candidates", JSON.stringify(candidateList));
})();