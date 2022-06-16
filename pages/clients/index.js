import React from 'react';
import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    {id: "steven", name: 'Steven'},
    {id: "ron", name: 'Ron'}
  ]
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          {clients.map(client => (
            <li key={client.id}>
              <Link href={{
                pathname: '/clients/[id]',
                query: {id : client.id}
              }}>{client.name}</Link>
            </li>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default ClientsPage