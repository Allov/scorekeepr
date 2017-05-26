import { scorekeeprApiBaseUrl } from '../globalConfig';

describe('global-config', () => {
  it('should contain a configuration for scorekeepr API base url', () => {
    expect(scorekeeprApiBaseUrl).toBeDefined();
  });
});
