export default function TabButton({ children, onSelect }) {
    console.log('tab button');
  return (
    <li>
      <button onClick={onSelect}>{children}</button>

    </li>
  );
}
