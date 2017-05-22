const index = (req, res) => {
  res.json({
    vendor: 'scorekeepr.net',
    version: '0.1',
    currentTime: Date.now(),
  });
};

module.exports = {
  index,
};
