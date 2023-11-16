import styled from 'styled-components';

interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {}

const View = (props: ViewProps) => {
  return (
    <ViewLayout {...props} />
  )
}

export default View

const ViewLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`

