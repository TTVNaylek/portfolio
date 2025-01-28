import '../styles/Main.css'
import Title from '../components/Title/Title.tsx'
import Nav from '../components/Navigation/Navigation.tsx'

function Projects() {

  return (
    <>
      <Title title="Projects" subtitle="Naylek_"/>
      <Nav/>
        <main>
        <h3>Introduction</h3>
            <p>
                Welcome to the <strong>Projects</strong> page. Here you can see all my favorites projects that i have made. 
                If the style is not incredible it's beacause i don't had the time to do it correctly or juste by laziness.
                If you want to be sure look at the version of the site.
            </p>
        </main>
    </>
  )
}

export default Projects
