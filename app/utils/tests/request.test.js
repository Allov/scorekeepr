/**
 * Test the request function
 */

import request, { parseJSON } from '../request';

describe('request', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    window.fetch = jest.fn();
  });

  describe('stubbing successful response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      });

      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    it('should format the response correctly', (done) => {
      request('/thisurliscorrect')
        .catch(done)
        .then((json) => {
          expect(json.hello).toBe('world');
          done();
        });
    });
  });

  describe('stubbing error response', () => {
    // Before each test, pretend we got an unsuccessful response
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'application/json',
        },
      });

      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    it('should catch errors', (done) => {
      request('/thisdoesntexist')
        .catch((err) => {
          expect(err.response.status).toBe(404);
          expect(err.response.statusText).toBe('Not Found');
          done();
        });
    });
  });
});

describe('parseJSON', () => {
  it('should parse JSON', () => {
    const json = JSON.stringify({ test: 0 });
    const parsedJson = JSON.parse(json);
    const mockedResponse = {
      text: () => ({ then: (cb) => cb(json) }),
    };

    const actual = parseJSON(mockedResponse);

    expect(actual).toEqual(parsedJson);
  });

  it('should return null when empty', () => {
    const mockedResponse = {
      text: () => ({ then: (cb) => cb() }),
    };

    const actual = parseJSON(mockedResponse);

    expect(actual).toEqual(null);
  });
});
