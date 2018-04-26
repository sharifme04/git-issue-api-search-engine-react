import React from 'react';
import { Link } from 'react-router-dom';

export default function Tablerow({issue}) {
  return(
      <tr>
        <td><Link to={`${issue.id}`}>{issue.number}</Link></td>
        <td>{issue.id}</td>
        <td>{issue.title}</td>
        <td>{issue.created_at}</td>
      </tr>
  )
};
