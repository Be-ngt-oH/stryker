import * as chai from 'chai';
import * as fs from 'mz/fs';
import * as chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;
const expectFileExists = (path: string) => expect(fs.exists(path), `File ${path} does not exist`).to.eventually.eq(true);

describe('Verify stryker has ran correctly', () => {

  describe('html reporter', () => {

    it('should report in html files', () => {
      return Promise.all([
        expectFileExists('reports/mutation/html/Add.js.html'),
        expectFileExists('reports/mutation/html/Circle.js.html'),
        expectFileExists('reports/mutation/html/index.html')
      ]);
    });

    it('should copy over the resources', () => {
      return Promise.all([
        expectFileExists('reports/mutation/html/__resources/stryker.css'),
        expectFileExists('reports/mutation/html/__resources/stryker.js'),
        expectFileExists('reports/mutation/html/__resources/stryker-80x80.png'),
        expectFileExists('reports/mutation/html/__resources/bootstrap/css/bootstrap.min.css'),
        expectFileExists('reports/mutation/html/__resources/bootstrap/css/bootstrap.min.css'),
        expectFileExists('reports/mutation/html/__resources/highlightjs/styles/default.css')
      ]);
    });
  });


});