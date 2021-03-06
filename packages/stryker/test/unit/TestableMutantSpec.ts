import { expect } from 'chai';
import { Mutant } from 'stryker-api/mutant';
import TestableMutant from '../../src/TestableMutant';
import { mutant, textFile, runResult, testResult } from './../helpers/producers';
import SourceFile from '../../src/SourceFile';
import { TextFile } from 'stryker-api/core';

describe('TestableMutant', () => {

  let sut: TestableMutant;
  let innerMutant: Mutant;
  let innerTextFile: TextFile;

  beforeEach(() => {
    innerMutant = mutant();
    innerTextFile = textFile();
    sut = new TestableMutant(innerMutant, new SourceFile(innerTextFile));
  });

  it('should pass properties from mutant and source code', () => {
    expect(sut.fileName).eq(innerMutant.fileName);
    expect(sut.range).eq(innerMutant.range);
    expect(sut.mutatorName).eq(innerMutant.mutatorName);
    expect(sut.replacement).eq(innerMutant.replacement);
    expect(sut.originalCode).eq(innerTextFile.content);
  });

  it('should reflect timeSpentScopedTests and scopedTestIds', () => {
    sut.addAllTestResults(runResult({ tests: [testResult({ timeSpentMs: 12 }), testResult({ timeSpentMs: 42 })] }));
    expect(sut.timeSpentScopedTests).eq(54);
    expect(sut.scopedTestIds).deep.eq([0, 1]);
  });

  it('should calculate position using sourceFile', () => {
    innerTextFile.content = 'some content';
    innerMutant.range = [1, 2];
    expect(sut.location).deep.eq({ start: { line: 0, column: 1 }, end: { line: 0, column: 2 } });
  });

  it('should return original code with mutant replacement when `mutatedCode` is requested', () => {
    innerTextFile.content = 'some content';
    innerMutant.range = [4, 5];
    innerMutant.replacement = ' mutated! ';
    expect(sut.mutatedCode).eq('some mutated! content');
  });

  it('should be able to retrieve original lines and mutated lines', () => {
    innerTextFile.content = 'line 1\nline 2\nline 3\nline 4';
    innerMutant.range = [11, 12];
    innerMutant.replacement = ' mutated! ';
    expect(sut.originalLines).eq('line 2');
    expect(sut.mutatedLines).eq('line mutated! 2');
  });
});
