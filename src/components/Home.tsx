import '../styles/Home.css'
import Title from './Title.tsx'


function Home() {

  return (
    <>
      <Title title="WhoAmI?" subtitle="Naylek_"/>
      <div className='navContainer'>
        <a href="#"><i className="fa-solid fa-house"></i></a>
        <a href="#"><i className="fa-solid fa-hammer"></i></a>
        <a href="#">???</a>
      </div>
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
                And the third is ??? Don't worry about it there's nothing there.
                This website will permit me to show you my skills with my projects like what languages I use to realize
                them.
                I'll probably update this website to add a more few pages for things that I would like to show you.
            </p>
        </main>
    </>
  )
}

export default Home
