export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">Start adding some items on your list 🚀</footer>
    );
  }
  const itemNum = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / itemNum) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go`
          : `💼 you have ${itemNum} items on your list, and you already packed ${itemPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
