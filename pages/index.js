import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedSectionsData } from '../lib/sections'

export default function Home({ allSectionsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Bem vindo ao <strong>Handbook da Taller</strong>! Aqui você vai encontrar tudo que precisa sobre como operamos nesta empresa tão linda.</p>
        <p>Este é um projeto open-source, portanto, sinta-se à vontade para fazer um fork e criar o seu próprio handkbook com base no nosso.</p>
        <p>Qualquer Taller 🍴 pode contribuir com este projeto, o qual utilizamos para praticar o que há de mais moderno no "mundo mágico" do desenvolvimento de software, tal como:</p>
        <ul>
          <li>Testes automatizados dos mais diversos</li>
          <li>Integração e entrega contínua</li>
          <li>Retatoração</li>
          <li>e muito mais!</li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Sumário</h2>
        <ul className={utilStyles.list}>
          {allSectionsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="sections/[id]" as={`/sections/${id}`}>
                <a>{ title }</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allSectionsData = getSortedSectionsData()
  return {
    props: { allSectionsData }
  }
}
