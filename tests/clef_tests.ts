// [VexFlow](http://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
// MIT License
//
// Clef Tests

import { VexFlowTests, TestOptions } from './vexflow_test_helpers';
import { QUnit, ok } from './declarations';

const ClefTests = {
  Start: function (): void {
    QUnit.module('Clef');
    const runTests = VexFlowTests.runTests;
    runTests('Clef Test', this.draw);
    runTests('Clef End Test', this.drawEnd);
    runTests('Small Clef Test', this.drawSmall);
    runTests('Small Clef End Test', this.drawSmallEnd);
    runTests('Clef Change Test', this.drawClefChange);
  },

  draw: function (options: TestOptions): void {
    const f = VexFlowTests.makeFactory(options, 800, 120);
    f.Stave()
      .addClef('treble')
      .addClef('treble', 'default', '8va')
      .addClef('treble', 'default', '8vb')
      .addClef('alto')
      .addClef('tenor')
      .addClef('soprano')
      .addClef('bass')
      .addClef('bass', 'default', '8vb')
      .addClef('mezzo-soprano')
      .addClef('baritone-c')
      .addClef('baritone-f')
      .addClef('subbass')
      .addClef('percussion')
      .addClef('french')
      .addEndClef('treble');
    f.draw();
    ok(true, 'all pass');
  },

  drawEnd: function (options: TestOptions): void {
    const f = VexFlowTests.makeFactory(options, 800, 120);
    f.Stave()
      .addClef('bass')
      .addEndClef('treble')
      .addEndClef('treble', 'default', '8va')
      .addEndClef('treble', 'default', '8vb')
      .addEndClef('alto')
      .addEndClef('tenor')
      .addEndClef('soprano')
      .addEndClef('bass')
      .addEndClef('bass', 'default', '8vb')
      .addEndClef('mezzo-soprano')
      .addEndClef('baritone-c')
      .addEndClef('baritone-f')
      .addEndClef('subbass')
      .addEndClef('percussion')
      .addEndClef('french');
    f.draw();
    ok(true, 'all pass');
  },

  drawSmall: function (options: TestOptions): void {
    const f = VexFlowTests.makeFactory(options, 800, 120);
    f.Stave()
      .addClef('treble', 'small')
      .addClef('treble', 'small', '8va')
      .addClef('treble', 'small', '8vb')
      .addClef('alto', 'small')
      .addClef('tenor', 'small')
      .addClef('soprano', 'small')
      .addClef('bass', 'small')
      .addClef('bass', 'small', '8vb')
      .addClef('mezzo-soprano', 'small')
      .addClef('baritone-c', 'small')
      .addClef('baritone-f', 'small')
      .addClef('subbass', 'small')
      .addClef('percussion', 'small')
      .addClef('french', 'small')
      .addEndClef('treble', 'small');
    f.draw();
    ok(true, 'all pass');
  },

  drawSmallEnd: function (options: TestOptions): void {
    const f = VexFlowTests.makeFactory(options, 800, 120);
    f.Stave()
      .addClef('bass', 'small')
      .addEndClef('treble', 'small')
      .addEndClef('treble', 'small', '8va')
      .addEndClef('treble', 'small', '8vb')
      .addEndClef('alto', 'small')
      .addEndClef('tenor', 'small')
      .addEndClef('soprano', 'small')
      .addEndClef('bass', 'small')
      .addEndClef('bass', 'small', '8vb')
      .addEndClef('mezzo-soprano', 'small')
      .addEndClef('baritone-c', 'small')
      .addEndClef('baritone-f', 'small')
      .addEndClef('subbass', 'small')
      .addEndClef('percussion', 'small')
      .addEndClef('french', 'small');
    f.draw();
    ok(true, 'all pass');
  },

  drawClefChange: function (options: TestOptions): void {
    const f = VexFlowTests.makeFactory(options, 800, 180);
    const stave = f.Stave().addClef('treble');
    const notes = [
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'treble' }),
      f.ClefNote({ type: 'alto', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'alto' }),
      f.ClefNote({ type: 'tenor', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'tenor' }),
      f.ClefNote({ type: 'soprano', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'soprano' }),
      f.ClefNote({ type: 'bass', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'bass' }),
      f.ClefNote({ type: 'mezzo-soprano', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'mezzo-soprano' }),
      f.ClefNote({ type: 'baritone-c', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'baritone-c' }),
      f.ClefNote({ type: 'baritone-f', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'baritone-f' }),
      f.ClefNote({ type: 'subbass', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'subbass' }),
      f.ClefNote({ type: 'french', options: { size: 'small' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'french' }),
      f.ClefNote({ type: 'treble', options: { size: 'small', annotation: '8vb' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'treble', octave_shift: -1 }),
      f.ClefNote({ type: 'treble', options: { size: 'small', annotation: '8va' } }),
      f.StaveNote({ keys: ['c/4'], duration: '4', clef: 'treble', octave_shift: 1 }),
    ];
    const voice = f.Voice({ time: '12/4' }).addTickables(notes);
    f.Formatter().joinVoices([voice]).formatToStave([voice], stave);
    f.draw();
    ok(true, 'all pass');
  },
};

export { ClefTests };
