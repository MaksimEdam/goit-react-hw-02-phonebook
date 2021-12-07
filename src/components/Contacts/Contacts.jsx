function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul className="bbb">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="iii">
          <p>{name}</p>
          <p>{number}</p>
          <button className="fff" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
