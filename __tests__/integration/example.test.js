const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate');

describe('Examples', () => {
  beforeEach(async () => {
    await truncate();
  })

  it('should sum two numbers ', () => {
    const x = 2;
    const y = 4;

    const sum = x + y;

    expect(sum).toBe(6);
  });

  it('Create user', async () => {
    const user = await User.create({ name: 'André', email: 'and3re@hotmail.com', password: '123123' })

    expect(user.email).toBe('and3re@hotmail.com');

  });

})

