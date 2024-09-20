export const normalizeString = (str: string): string => {
  // Chuyển đổi sang chữ thường, loại bỏ dấu và khoảng trắng thừa
  return str
    .toLowerCase() // Chuyển về chữ thường
    .normalize("NFD") // Tách ký tự có dấu
    .replace(/[\u0300-\u036f]/g, "") // Xóa dấu
    .replace(/\s+/g, " ") // Thay thế nhiều khoảng trắng thành một khoảng trắng
    .trim(); // Xóa khoảng trắng ở đầu và cuối
};
