import React from 'react'
import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();
  const client = router.query.id;

  function loadProjectHandler () {
    //  load data...
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {id: 'steven', clientprojectid: 'projecta'}
    })
  }

  return (
    <div>
      <h1>The projects of {client}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage