interface props {
  firstname: string;
  lastname: string;
  email: string;
}

function Table({ firstname, lastname, email }: props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{firstname}</td>
          <td>{lastname}</td>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
