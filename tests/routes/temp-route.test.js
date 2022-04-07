const build = require('../../src/app');

let app;

describe('Temp route', () => {
  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });

  it('should return 200 when temp route called', async () => {
    const res = await app.inject({
      url: '/api/v1/test',
    });

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual(expect.any(Array));
  });

  it('should return 201 when temp route called', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/test',
      payload: {
        title: 'test title',
      },
    });

    expect(res.statusCode).toBe(201);
    expect(res.json().id).toBeDefined();
  });
});
