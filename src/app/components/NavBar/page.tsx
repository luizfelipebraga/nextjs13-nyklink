'use client';

import Logo from '@app/assets/logo1.png';
import ContatoButton from '@app/components/Contato/page';
import Image from 'next/image';
import Link from 'next/link';

import { BoxImage, Header, Li, Nav } from './styles';

export default function NavBar() {
  return (
    <Header>
      <Nav>
        <Link href="/home" passHref>
          <Image src={Logo} alt="Logo" loading="eager" priority />
        </Link>

        <ul>
          <Li>
            <Link href="/home">Página Inicial</Link>
            <Link href="#services">Serviços</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="/sobre">Sobre</Link>
            <ContatoButton />
          </Li>
        </ul>
      </Nav>
    </Header>
  );
}
