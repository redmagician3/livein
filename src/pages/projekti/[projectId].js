import React from 'react'
import Project from '@/components/Project'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import data from './images'
import LayoutSubPages2 from '@/components/Layouts/LayoutSubPages2'

const token =
  '1ce221ea319fcc4b941ac7a87e9a3f74ef43a99362527d4cd24a7bdba66f0e0ee6f4e7f3f1661a180c0ad2c58cbab017bf97351412c8e87e1190c7cdafd5a405fdaefa04dccf83307c09f6ab47e2312cceed28cc4e6fa8fd3fd422a2c1b1f872566069d8953f2c0b18a51afe4d233f11ebfaaa463f6e80ec887a4340cd58dacf'

export const getServerSideProps = async () => {
  const req = await fetch(
    `https://www.liveinbackend.testslusalke.si/api/projects?populate=*`,
    {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,

        'Content-Type': 'application/json',
      },
    }
  )
  const res = await req.json()
  return {
    props: {
      news: res,
    },
  }
}

function projectId({ news }) {
  const router = useRouter()
  const { projectId } = router.query
  console.log(news.data)

  return (
    <LayoutSubPages2>
      <Project id={projectId} pathname={router.pathname} data={news.data} />
    </LayoutSubPages2>
  )
}

export default projectId
