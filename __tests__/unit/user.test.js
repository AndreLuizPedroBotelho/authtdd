const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  })

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'André',
      email: 'andre@hotmail.com',
      password: '123123'
    })

    const comnpareHash = await bcrypt.compare('123123', user.password_hash);
    expect(comnpareHash).toBe(true)
  });

})
