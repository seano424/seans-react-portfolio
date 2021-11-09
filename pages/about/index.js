import Avatar from '../../components/Avatar'
import Layout from '../../components/Layout'
import Technologies from '@/components/Technologies'
import styles from '@/styles/About.module.css'
import About from '@/components/About'

export default function index() {
  return (
    <Layout>
      <About />
      <Technologies />
    </Layout>
  )
}
