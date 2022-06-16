import React from 'react'
import {useRouter} from 'next/router';

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <div>Selected Client Project</div>
  )
}

export default SelectedClientProjectPage