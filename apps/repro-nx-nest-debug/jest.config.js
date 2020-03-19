module.exports = {
  name: 'repro-nx-nest-debug',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/repro-nx-nest-debug',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
