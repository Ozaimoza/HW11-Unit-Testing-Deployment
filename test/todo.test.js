const app = require ('../app')
const request = require ('supertest')

test ('Get Message Success From List Todo API', (done) => {
    request(app)
        .get('/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        .then (response => {
            expect(response.body.message).toBe('OK')
            done()
        })
        .catch((error) => done(error));
})

test('Create New Todo', (done) => {
    // Data yang akan dikirim dalam body request
    const requestData = {
        title: 'New Todo',
    };

    const newData = {
        title: 'New Todo',
    };

    // Menggunakan supertest untuk mengirim permintaan ke endpoint
    request(app)
        .post('/todo') 
        .send(requestData)
        .expect('Content-Type', /json/)
        .expect(201)
        .then((response) => {
            expect(response.body.message).toBe('New Data Created')
            expect(response.body.data).toBeTruthy();
            expect(response.body.data.title).toBe(newData.title)
            done();
            })
        .catch((error) => done(error));
})

test('Get Todo By Id', (done) => {
    const data = {
        id: 1,
        title: 'todo 1'
    }

    request(app)
        .get('/todo/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .then (response => {
            expect(response.body.message).toBe('OK')
            expect(response.body.data.id).toBe(data.id)
            expect(response.body.data.title).toBe(data.title)
            done()
        })
        .catch((error) => done(error));
})

test('Put Todo By Id', (done) => {
    const requestData = {
        title: 'Judul 5',
    };

    const newdata = {
        id: 5,
        title: 'Judul 5'
    }

    request(app)
        .put('/todo/5')
        .send(requestData)
        .expect('Content-Type', /json/)
        .expect(200)
        .then (response => {
            expect(response.body.message).toBe('OK')
            expect(response.body.data.id).toBe(newdata.id)
            expect(response.body.data.title).toBe(newdata.title)
            done()
        })
        .catch((error) => done(error));
})

test('Delete Todo By Id', (done) => {
    const id = 5

    request(app)
        .delete(`/todo/${id}`)
        .expect('Content-Type', /json/)
        .expect(202)
        .then (response => {
            expect(response.body.message).toBe(`Data With Id ${id} Successfully Deleted (Soft Delete)`)

            done()
        })
        .catch((error) => done(error));
})