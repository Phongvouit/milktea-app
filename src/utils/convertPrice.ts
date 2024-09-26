export const convertPrice = (price: number) => {
  try {
    const result = price?.toLocaleString().replaceAll(",", ".");
    return `${result}đ`;
  } catch (error) {
    return null;
  }
};
