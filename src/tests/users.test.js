const data = require('./data');
const request = require('supertest');
const assert = require('assert');
const expect = require('chai').expect;

describe('CRUD tests for users', () => {
    it('creats user', done => {
        request(data.url)
        .post('/users')
        .send(data.userPayLoad)
        .expect(201)
        .then(res => {
          createdUserId = res.body.id
          assert(res.body.id);
          
          request(data.url)
          .get('/users/' + createdUserId)
          .expect(200, done)
      })
    })

    it('read user', done => {
      request(data.url)
        .get('/users')
        .expect(200)
        .then(res => {
          expect(res.body).length.gte(2)
          userId = res.body[0].id

          request(data.url)
          .get('/users/' + userId)
          .then(res => {
            assert(res.body.id, userId);
            done();
          });
        });
    });

    it('update user with putch', done => {
      updateName = 'Leanne G';
      request(data.url)
      .get('/users')
      .then((res) => {
        expect(res.body).length.gte(2)
        userId = res.body[2].id
        expect(res.body[2].name).not.equal(updateName)

        request(data.url)
        .patch('/users/'+ userId)
        .send({name:updateName})
        .expect(200)
        .then(res => {
          assert(res.body.name, updateName);
          assert(res.body.id, userId);
          done();
        });
      })
    });

    it('update user with put', done => {
      request(data.url)
        .get('/users')
        .then((res) => {
          expect(res.body).length.gte(5)
          userId = res.body[5].id

          request(data.url)
          .put('/users/'+ userId)
          .send(data.userPayLoad)
          .expect(200)
          .then(res => {
            assert(res.body.name, 'Leanne Graham');
            assert(res.body.id, userId)
            done();
          });
        });
    });

    it('delete user', done => {
      request(data.url)
      .get('/users')
      .then((res) => {
        expect(res.body).length.gte(9)
        userId = res.body[9].id

        request(data.url)
        .delete('/users/'+ userId)
        .expect(200)

        request(data.url)
        .get('/users/' + userId)
        .expect(404, done)
      });
    });
});