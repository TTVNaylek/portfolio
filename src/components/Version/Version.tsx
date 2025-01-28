import './Version.css'

type VersionProps = {
  version: string;
};

function Version({ version }: VersionProps) {

  return (
    <>
      <p id="version">{version}</p>
    </>
  )
}

export default Version
