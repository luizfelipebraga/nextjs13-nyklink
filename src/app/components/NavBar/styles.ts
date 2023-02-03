import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  /* background-color: var(--white); */

  padding: 1rem;
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxImage = styled.div`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Li = styled.li`
  display: flex;
  gap: 2rem;
  a:not(:last-child) {
    color: rgb(135, 135, 135);
    font-size: 1rem;
    font-weight: 500;
    transition: all 100ms ease-out 0s;

    &:hover {
      color: var(--white);
    }
  }
`;
