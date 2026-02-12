import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgForOf
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true
})
export class Navbar {
  isMenuOpen = false;

  menuItems = [
    {
      path: '/examen-1',
      label: 'Examen 1',
      description: 'Evaluación de matemáticas'
    },
    {
      path: '/examen-2',
      label: 'Examen 2',
      description: 'Análisis de datos'
    },
    {
      path: '/examen-3',
      label: 'Examen 3',
      description: 'Laboratorio virtual'
    },
    {
      path: '/examen-4',
      label: 'Examen 4',
      description: 'Laboratorio virtual'
    },
    {
      path: '/examen-5',
      label: 'Examen 5',
      description: 'Laboratorio virtual'
    },
    {
      path: '/examen-6',
      label: 'Examen 6',
      description: 'Laboratorio virtual'
    },
    {
      path: '/examen-7',
      label: 'Examen 7',
      description: 'Laboratorio virtual'
    },
    {
      path: '/examen-8',
      label: 'Examen 8',
      description: 'Laboratorio virtual'
    },
    {
      path: '/examen-9',
      label: 'Examen 9',
      description: 'Laboratorio virtual'
    },
    {
      path: '/examen-10',
      label: 'Examen 10',
      description: 'Laboratorio virtual'
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevenir scroll cuando el menú móvil está abierto
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'unset';
  }
}
