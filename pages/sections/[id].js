import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getAllSectionsIds, getSectionData } from '../../lib/sections'
import utilStyles from '../../styles/utils.module.css'

export default function Section({ sectionData }) {
  return (
    <Layout>
      <Head>
        <title>{ sectionData.title }</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{ sectionData.title }</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={ sectionData.date } />
        </div>
        <div dangerouslySetInnerHTML={{ __html: sectionData.contentHtml }}/>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllSectionsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const sectionData = await getSectionData(params.id)
  return {
    props: { sectionData }
  }
}
