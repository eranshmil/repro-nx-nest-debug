module.exports = {
  name: 'repro-nx-nest-debug',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/repro-nx-nest-debug',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
