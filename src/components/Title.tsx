import '../styles/Title.css'

type TitleProps = {
  title: string;
  subtitle: string;
};

function Title({ title, subtitle }: TitleProps) {

  return (
    <>
      <div className='titleContainer'>
        <div className='titleItem'>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>
      </div>
    </>
  )
}

export default Title
