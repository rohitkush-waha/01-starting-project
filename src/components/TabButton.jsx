export default function TabButton({ children, isSelected, ...props }) {
  console.log("tab button");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
