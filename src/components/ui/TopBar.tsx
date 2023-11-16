import styled from 'styled-components';

interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  return (
    <TopBarLayout {...props} />
  );
};

export default TopBar;

const TopBarLayout = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  gap: 10px;

  height: 50px;
  width: 100%;

  background: var(--gray-gray-100, #FFF);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.10);

  box-sizing: border-box;
`;