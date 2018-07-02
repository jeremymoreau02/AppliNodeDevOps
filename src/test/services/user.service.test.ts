require('zone.js');
import 'reflect-metadata';
import { Component } from  "@angular/core";
import {inject} from  "@angular/core/testing";
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.expect;
import { UserService } from '../../app/services/user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

var users = [
  {
    id: 1,
    name: 'MOREAU Jérémy'
  },
  {
      id: 2,
    name: 'MOREAU Myriam'
  },
  {
      id: 3,
    name: 'MOREAU Frederic'
  },
  {
      id: 4,
    name: 'MOREAU Nelly'
  },
  {
      id: 5,
    name: 'Biloute'
  }
];
var usersServer = [
  {
    firstname: 'Alisson',
    lastname: 'Becker',
    age: 32,
    email: 'AlissonBecker@gmail.com'
  },
  {
    firstname: 'Case',
    lastname: 'Miro',
    age: 26,
    email: 'Casemiro@gmail.com'
  },
  {
    firstname: 'Douglas',
    lastname: 'Costa',
    age: 28,
    email: 'DouglasCosta@gmail.com'
  },
  {
    firstname: 'Neymar',
    lastname: 'Junior',
    age: 25,
    email: 'neymar@gmail.com'
  }
]


describe('UserService', () => {
    let service = new UserService(new HttpClient(null));

    it('userAdded', () => {
      service.addUser("Biloute")
      expect(service.getUsers()).to.eql(users);
    });

    it('getUserByIdExists', () => {
      expect(service.getUserById(1)).to.eql(users[0]);
    });

    it('getUserByIdNotExists', () => {
      expect(service.getUserById(30)).to.be.false;
    });

  }
)