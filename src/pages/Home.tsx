import '../styles/Main.css'
import Title from '../components/Title/Title.tsx'
import Nav from '../components/Navigation/Navigation.tsx'


function Home() {

  return (
    <>
      <Title title="WhoAmI?" subtitle="Naylek_"/>
      <Nav/>
        <main>
            <h3>Introduction</h3>
            <p>
                Hello to anyone who have found this website, here you will learn who am i and what is this website.
            </p>
            <h3>Presentation</h3>
            <p>
                I'm a french student in cybersecurity, i love to learn new things.
                Currently i don't work on any projects.
                I like web devlopment because it allows me to test new things without needing too many resources.
                Like an original weeb i love watch animes and playing video games, especially Valorant despite of my
                bronze rank.
            </p>
            <h3>Description of website</h3>
            <p>
                You can see 3 buttons, the first is the Home <i className="fa-solid fa-house"></i>, the second is the
                projects <i className="fa-solid fa-hammer"></i> page where you can see my projects.
            </p>
            <p>
                And the third is ??? Don't worry about it there's nothing there.
                This website will permit me to show you my skills with my projects like what languages I use to realize
                them.
            </p>
            <p>
                I'll probably update this website to add a more few pages for things that I would like to show you.
            </p>
            <p>
                And if you have eagle eyes you have maybe seen the text in the bottom right corner of this website, which is the version of the site.
                More, i add new stuff on this website more the version increase (no joke), by default this value is at v0.1.
            </p>
        </main>
    </>
  )
}

export default Home
