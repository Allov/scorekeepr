import { scorekeeprBaseUrl } from '../global-config';

describe('global-config', () => {
  it('should contain a configuration for scorekeepr API base url', () => {
    expect(scorekeeprBaseUrl).toBeDefined();
  });
});
